import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog/blog-service.service';

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.css']
})
export class NewBlogComponent implements OnInit {

  title = new FormControl();
  text = new FormControl();
  picture?: File;
  update:boolean = false;

  constructor(private router: Router, private activatedRoute:ActivatedRoute, private blogService: BlogService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((v)=>{
      if(v["id"] != undefined){
        this.update = true;
        this.blogService.get(parseInt(v["id"]));
        this.blogService.blog.subscribe((v)=>{
          this.title.setValue(v?.title);
          this.text.setValue(v?.text);
        });
      }else{
        this.update = false;
      }
    });
  }

  submit() {
    this.activatedRoute.params.subscribe((v)=>{
      let blog:Blog = {
        text: this.text.value,
        title: this.title.value,
        picture: pictureData,
        comments: null,
        id: null,
        imgUrl: null,
        user: null,
        user_id: null,
      };
      if(v["id"] == undefined){
        this.blogService.add(blog);
      }else{
        this.blogService.update(parseInt(v["id"]), blog);
      }
      this.router.navigateByUrl("/admin/blogs");
    });
  }

  onSelectFile(event: any) {
    this.picture = event.target.files[0];
    let reader = new FileReader();
    reader.onload = function () {
      pictureData = (reader.result as string).substring(5);

    }
    reader.readAsDataURL(this.picture!);
  }

}

let pictureData: String;
