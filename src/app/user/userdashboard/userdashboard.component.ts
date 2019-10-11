import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  book(){
    this.router.navigate(["user/book"])
  }
  lout()
  {
    this.router.navigate(["user"])
  }
}
