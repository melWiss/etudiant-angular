import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/models/comment';
import { CommentService } from 'src/app/services/comment/comment-service.service';

@Component({
  selector: 'app-admin-comments',
  templateUrl: './admin-comments.component.html',
  styleUrls: ['./admin-comments.component.css']
})
export class AdminCommentsComponent implements OnInit {

  constructor(private commentService:CommentService) {}

  public dataSource?:Comment[];
  public displayedColumns = ["id", "comment","user","avatar","blog_id","created_at","actions"];
  ngOnInit(): void {
    this.commentService.all();
    this.commentService.comments.subscribe((v)=>{
      this.dataSource = v!;
    });
  }

}
