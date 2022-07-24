import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { baseUrl } from 'src/app/consts';
import { Blog } from 'src/app/models/blog';
import { ResponseData } from 'src/app/models/response';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) {
    this.all();
  }

  public blogs:BehaviorSubject<Blog[]> = new BehaviorSubject<Blog[]>([]);
  public blog:BehaviorSubject<Blog|null> = new BehaviorSubject<Blog|null>(null);

  all() {
    this.http.get<ResponseData<Blog[]>>(baseUrl + "/blog", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      }
    }).subscribe((v)=>{
      if(v.success){
        this.blogs.next(v.data);
      }
    });
  }

  get(id: number) {
    this.http.get<ResponseData<Blog>>(baseUrl + "/blog/" + id, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      }
    }).subscribe((v)=>{
      if(v.success){
        this.blog.next(v.data);
      }
    });
  }

  commentOnBlog(comment: Comment, id: number) {
    this.http.post<ResponseData<Comment>>(baseUrl + "/blog/" + id, comment, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      }
    }).subscribe((v)=>{
      if(v.success){
        this.get(id);
      }
    });
  }
}
