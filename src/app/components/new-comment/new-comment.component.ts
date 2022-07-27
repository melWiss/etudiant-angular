import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog/blog-service.service';
import { CommentService } from 'src/app/services/comment/comment-service.service';
import { UserService } from 'src/app/services/user/user-service.service';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent implements OnInit {

  user = new FormControl();
  blog = new FormControl();
  comment = new FormControl();
  public update:boolean = false;

  constructor(
    private commentService:CommentService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    public userService:UserService,
    public blogService:BlogService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((v) => {
      if (v["id"] != undefined) {
        this.update = true;
        this.commentService.get(parseInt(v["id"]));
        this.commentService.comment.subscribe((comment) => {
          if (comment != null) {
            this.user.setValue(comment.user_id);
            this.blog.setValue(comment.blog_id);
            this.comment.setValue(comment.comment);
          }
        });
      }else{
        this.update = false;
      }
    });
  }

  submit() {
    this.activatedRoute.params.subscribe((v)=>{
      if(v["id"]!= undefined){
        this.commentService.update(parseInt(v['id']), {
          id: parseInt(v["id"]),
          blog_id:this.blog.value,
          comment: this.comment.value,
          user_id: this.user.value,
          user: null,
        });
      }else{
        this.commentService.add({
          id: null,
          blog_id:this.blog.value,
          comment: this.comment.value,
          user_id: this.user.value,
          user: null,
        });
      }
      this.router.navigateByUrl("/admin/comments");
    });
  }

}
