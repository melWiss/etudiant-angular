import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthenticationService } from '../services/auth/authentication-service.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  email = new FormControl('');
  password = new FormControl('');

  constructor(private authService:AuthenticationService) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.email.value, this.password.value);
  }

}
