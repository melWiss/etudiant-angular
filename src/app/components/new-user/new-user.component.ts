import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user-service.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  email = new FormControl();
  password = new FormControl();
  fullName = new FormControl();
  isAdmin = new FormControl();
  public update:boolean = false;

  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((v) => {
      if (v["id"] != undefined) {
        this.update = true;
        this.userService.get(parseInt(v["id"]));
        this.userService.user.subscribe((user) => {
          if (user != null) {
            this.email.setValue(user.email);
            this.fullName.setValue(user.name);
            this.isAdmin.setValue(user.is_admin);
          }
        });
      }else{
        this.update = false;
      }
    });
  }

  submit() {
    this.activatedRoute.params.subscribe((v)=>{
      if(v["id"]!= undefined){
        this.userService.update(parseInt(v['id']), {
          id: parseInt(v["id"]),
          email: this.email.value,
          name: this.fullName.value,
          is_admin: this.isAdmin.value,
          password: this.password.value
        });
      }else{
        this.userService.add({
          id: null,
          email: this.email.value,
          name: this.fullName.value,
          is_admin: this.isAdmin.value,
          password: this.password.value
        });
      }
      this.router.navigateByUrl("/admin/users");
    });
  }

}
