import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog/blog-service.service';
import { CommentService } from 'src/app/services/comment/comment-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth/authentication-service.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  public comment = new FormControl('');
  blogID?: number;

  constructor(public blogService: BlogService, public authService: AuthenticationService, private route: ActivatedRoute, private commentService: CommentService) { }

  ngOnInit(): void {
    this.route.params.subscribe((v) => {
      if (v["id"] != undefined) {
        this.blogID = parseInt(v["id"]);
        this.blogService.get(parseInt(v["id"]));
      }
    })
  }

  commentOn() {
    this.blogService.commentOnBlog({
      comment: this.comment.value,
      blog_id: null,
      id: null,
      user: null,
      user_id: null,
    }, this.blogID!);
    this.comment.reset();
  }

  deleteComment(id: number) {
    this.commentService.deleteComment(id).subscribe((v) => {
      if (v.success)
        this.blogService.get(this.blogID!);
    });
  }
  deleteAdminComment(id: number) {
    this.commentService.deleteAdminComment(id).subscribe((v) => {
      if (v.success)
        this.blogService.get(this.blogID!);
    });
  }

}
