import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicedashboard',
  templateUrl: './servicedashboard.component.html',
  styleUrls: ['./servicedashboard.component.css']
})
export class ServicedashboardComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  vbook()
    {
    this.router.navigate(["service/vbook"])
    }
  slout()
  {
    this.router.navigate(["service"])
  }
}


