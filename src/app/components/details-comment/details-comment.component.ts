import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from 'src/app/services/comment/comment-service.service';

@Component({
  selector: 'app-details-comment',
  templateUrl: './details-comment.component.html',
  styleUrls: ['./details-comment.component.css']
})
export class DetailsCommentComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private router:Router, public commentService:CommentService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((v)=>{
      this.commentService.get(parseInt(v["id"]));
    });
  }

  goBack() {
    this.router.navigateByUrl("/admin/comments");
  }

}
