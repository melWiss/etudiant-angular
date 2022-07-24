import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/auth/authentication-service.service';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.css']
})
export class UserAvatarComponent implements OnInit {

  imgUrl?: String;
  constructor(authService: AuthenticationService) {
    authService.state.subscribe((v) => {
      if (v && authService.auth.user != null) {
        this.imgUrl = "https://avatars.dicebear.com/api/adventurer-neutral/" + authService.auth.user.name + ".svg";
      }
    })
  }

  ngOnInit(): void {
  }

}
