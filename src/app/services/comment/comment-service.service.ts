import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/app/consts';
import { Comment } from 'src/app/models/comment';
import { ResponseData } from 'src/app/models/response';
import { BlogService } from '../blog/blog-service.service';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }

  deleteComment(id: number){
    return this.http.delete<ResponseData<Comment>>(baseUrl+"/comments/"+id, {
      headers: {
        Authorization: "Bearer "+localStorage.getItem("token"),
      }
    });
  }
  deleteAdminComment(id: number){
    return this.http.delete<ResponseData<Comment>>(baseUrl+"/admin/comments/"+id, {
      headers: {
        Authorization: "Bearer "+localStorage.getItem("token"),
      }
    });
  }
}
