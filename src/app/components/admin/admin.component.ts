import { Component, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { MatTab, MatTabChangeEvent } from '@angular/material/tabs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  private titles: String[] = ["users", "blogs", "comments"];

  public selectedIndex: number = 0;

  constructor(private activated: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activated.params.subscribe((v) => {
      if (v["class"] != undefined)
        this.selectedIndex = this.titles.indexOf(v["class"].toLowerCase());
    });
  }

  navigate(tab: MatTabChangeEvent) {
    // this.router.navigateByUrl("/admin/"+title);
    this.router.navigateByUrl("/admin/" + tab.tab.textLabel.toLowerCase());
  }

}
