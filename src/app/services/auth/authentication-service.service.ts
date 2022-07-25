import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { baseUrl } from 'src/app/consts';
import { Authentication } from 'src/app/models/auth';
import { ResponseData } from 'src/app/models/response';
import { User } from 'src/app/models/user';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private router:Router) {
    if (localStorage.getItem("token") != null) {
      this.auth = {
        token: localStorage.getItem("token"),
        user: null
      };
      this.me();
    }
  }

  state: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  auth: Authentication = {
    token: null,
    user: null
  };

  login(email: String, password: String) {
    this.http.post<ResponseData<Authentication>>(baseUrl + "/login", {
      email: email,
      password: password,
    }).subscribe((v) => {
      if (v.success && v.data.token != null) {
        localStorage.setItem("token", v.data.token!);
        this.auth = v.data;
        this.state.next(v.success);
      }
    });
  }

  logout() {
    localStorage.clear();
    this.state.next(false);
    this.auth.token = null;
    this.auth.user = null;
    this.router.navigateByUrl("/");
  }

  signup(name: String, email: String, password: String) {
    this.http.post<ResponseData<Authentication>>(baseUrl + "/signup", {
      name: name,
      email: email,
      password: password,
    }).subscribe((v)=>{
      console.log(JSON.stringify(v));
      if(v.success && v.data.token != null && v.data.user != null){
        console.log("in");
        localStorage.setItem("token", v.data.token);
        this.auth = v.data;
        this.state.next(v.success);
      }
    });
  }

  me() {
    this.http.get<ResponseData<User>>(baseUrl + "/me", {
      headers: {
        Authorization: "Bearer "+this.auth?.token!,
      }
    }).subscribe((v)=>{
      if(v.success){
        this.auth.user = v.data;
        this.state.next(true);
      }
    });
  }
}
