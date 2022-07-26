import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { baseUrl } from 'src/app/consts';
import { Comment } from 'src/app/models/comment';
import { ResponseData } from 'src/app/models/response';
import { AuthenticationService } from '../auth/authentication-service.service';
import { BlogService } from '../blog/blog-service.service';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient, private authService: AuthenticationService) { }

  public comments: BehaviorSubject<Comment[] | null> = new BehaviorSubject<Comment[] | null>(null);
  public comment: BehaviorSubject<Comment | null> = new BehaviorSubject<Comment | null>(null);

  deleteComment(id: number) {
    return this.http.delete<ResponseData<Comment>>(baseUrl + "/comments/" + id, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      }
    });
  }
  get(id: number) {
    this.http.get<ResponseData<Comment>>(baseUrl + "/admin/comments/" + id, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      }
    }).subscribe((v)=>{
      if(v.success)
        this.comment.next(v.data);
    });
  }
  deleteAdminComment(id: number) {
    return this.http.delete<ResponseData<Comment>>(baseUrl + "/admin/comments/" + id, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      }
    });
  }

  all() {
    this.http.get<ResponseData<Comment[]>>(
      baseUrl + "/admin/comments",
      {
        headers: {
          Authorization: "Bearer " + this.authService.auth.token
        }
      }
    ).subscribe((v) => {
      if (v.success)
        this.comments.next(v.data);
    });
  }
}
