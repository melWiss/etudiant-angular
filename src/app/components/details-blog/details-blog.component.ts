import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog/blog-service.service';

@Component({
  selector: 'app-details-blog',
  templateUrl: './details-blog.component.html',
  styleUrls: ['./details-blog.component.css']
})
export class DetailsBlogComponent implements OnInit {

  constructor(private router:Router, private activatedRoute:ActivatedRoute, public blogService:BlogService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((v)=>{
      this.blogService.get(parseInt(v["id"]));
    });
  }

  goBack() {
    this.router.navigateByUrl("/admin/blogs");
  }

}
