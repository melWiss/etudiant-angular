import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/auth/authentication-service.service';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.css']
})
export class UserAvatarComponent implements OnInit {

  @Input("name") name?:String;
  imgUrl?: String;
  constructor(private authService: AuthenticationService) {
    
  }

  ngOnInit(): void {
    this.authService.state.subscribe((v) => {
      if(this.name!=null){
        this.imgUrl = "https://avatars.dicebear.com/api/adventurer-neutral/" + this.name + ".svg";
      }else if (v && this.authService.auth.user != null) {
        this.imgUrl = "https://avatars.dicebear.com/api/adventurer-neutral/" + this.authService.auth.user.name + ".svg";
      }else {
        this.imgUrl = "https://avatars.dicebear.com/api/adventurer-neutral/";
      }
    })
  }

}
