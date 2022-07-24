import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog/blog-service.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  constructor(public blogService:BlogService) { }

  ngOnInit(): void {
  }

}
