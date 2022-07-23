import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { baseUrl } from 'src/app/consts';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor(private http:HttpClient) {}

  login(email:String, password:String){
    return this.http.post(baseUrl+"/login",{
      email: email,
      password: password,
    });
  }

  signup(name:String, email:String, password:String){
    return this.http.post(baseUrl+"/signup",{
      name: name,
      email:email,
      password: password,
    });
  }
}
