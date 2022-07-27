import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user-service.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  constructor(public userService:UserService, private router:Router) { }

  public dataSource?:User[];
  public displayedColumns: string[] = ['id', 'name', 'avatar', 'email', 'is_admin', 'actions'];

  ngOnInit(): void {
    this.userService.all();
    this.userService.users.subscribe((v)=>{
      this.dataSource = v!;
    })
  }

  add(){
    this.router.navigateByUrl("/admin/users/new");
  }

  update(id:number){
    this.router.navigateByUrl("/admin/users/update/"+id);
  }

  showDetails(id: number) {
    this.router.navigateByUrl("/admin/users/"+id);
  }

}
