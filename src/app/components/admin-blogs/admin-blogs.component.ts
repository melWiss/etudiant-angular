import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog/blog-service.service';

@Component({
  selector: 'app-admin-blogs',
  templateUrl: './admin-blogs.component.html',
  styleUrls: ['./admin-blogs.component.css']
})
export class AdminBlogsComponent implements OnInit {

  constructor(private blogService:BlogService) { }

  public dataSource?:Blog[];
  public displayedColumns: string[] = ['id', 'title', 'user', 'avatar', 'created_at', 'actions'];

  ngOnInit(): void {
    this.blogService.all();
    this.blogService.blogs.subscribe((v)=>{
      this.dataSource = v;
    });
  }

}
