import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user-service.service';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.css']
})
export class DetailsUserComponent implements OnInit {

  constructor(private router:Router,private activatedRoute:ActivatedRoute, public userService:UserService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((v)=>{
      this.userService.get(parseInt(v["id"]));
    });
  }

  goBack(){
    this.router.navigateByUrl("/admin/users");
  }

}
