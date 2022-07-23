import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/app/consts';

@Injectable({
  providedIn: 'root'
})
export class CommentServiceService {

  constructor(private http:HttpClient) { }

  deleteComment(id: number){
    this.http.delete(baseUrl+"/comments/"+id, {
      headers: {
        Authorization: "Bearer "+localStorage.getItem("token"),
      }
    });
  }
}
