import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { baseUrl } from 'src/app/consts';
import { ResponseData } from 'src/app/models/response';
import { User } from 'src/app/models/user';
import { AuthenticationService } from '../auth/authentication-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private authService: AuthenticationService) { }

  public users: BehaviorSubject<User[] | null> = new BehaviorSubject<User[] | null>(null);
  public user: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  get(id:number) {
    this.http.get<ResponseData<User>>(baseUrl + "/admin/users/"+id, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      }
    }).subscribe((v)=>{
      if(v.success)
        this.user.next(v.data);
    })
  }
  all() {
    this.http.get<ResponseData<User[]>>(
      baseUrl + "/admin/users",
      {
        headers: {
          Authorization: "Bearer " + this.authService.auth.token,
        }
      }
    ).subscribe((v) => {
      if (v.success)
        this.users.next(v.data);
    });
  }
  delete(id: number) {
    this.http.delete<ResponseData<User>>(
      baseUrl + "/admin/users/" + id,
      {
        headers: {
          Authorization: "Bearer " + this.authService.auth.token,
        }
      }
    ).subscribe((v) => {
      if (v.success)
        this.all();
    });
  }
  update(id: number, user: User) {
    this.http.put<ResponseData<User>>(
      baseUrl + "/admin/users/" + id,
      user,
      {
        headers: {
          Authorization: "Bearer " + this.authService.auth.token,
        }
      }
    ).subscribe((v) => {
      if (v.success)
        this.all();
    });
  }
  add(user: User) {
    this.http.put<ResponseData<User>>(
      baseUrl + "/admin/users",
      user,
      {
        headers: {
          Authorization: "Bearer " + this.authService.auth.token,
        }
      }
    ).subscribe((v) => {
      if (v.success)
        this.all();
    });
  }
}
