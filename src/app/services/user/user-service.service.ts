import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/app/consts';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  me(){
    return this.http.get(baseUrl+"/",{
      headers: {
        Authorization: "Bearer "+localStorage.getItem("token"),
      }
    })
  }
}
