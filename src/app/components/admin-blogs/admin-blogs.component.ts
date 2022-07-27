import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog/blog-service.service';

@Component({
  selector: 'app-admin-blogs',
  templateUrl: './admin-blogs.component.html',
  styleUrls: ['./admin-blogs.component.css']
})
export class AdminBlogsComponent implements OnInit {

  constructor(public blogService:BlogService, private router:Router) { }

  public dataSource?:Blog[];
  public displayedColumns: string[] = ['id', 'title', 'user', 'avatar', 'created_at', 'actions'];

  ngOnInit(): void {
    this.blogService.all();
    this.blogService.blogs.subscribe((v)=>{
      this.dataSource = v;
    });
  }

  add(){
    this.router.navigateByUrl("/admin/blogs/new");
  }

  update(id:number){
    this.router.navigateByUrl("/admin/blogs/update/"+id);
  }

  showDetails(id: number) {
    this.router.navigateByUrl("/admin/blogs/"+id);
  }

}
