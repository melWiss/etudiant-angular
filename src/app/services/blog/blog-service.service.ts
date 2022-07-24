import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/app/consts';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  all() {
    return this.http.get(baseUrl + "/blog", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      }
    });
  }

  get(id: number) {
    return this.http.get(baseUrl + "/blog/" + id, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      }
    });
  }

  commentOnBlog(comment: Comment, id: number) {
    this.http.post(baseUrl + "/blog/" + id, comment, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      }
    });
  }
}
