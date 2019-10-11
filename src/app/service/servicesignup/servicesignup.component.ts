import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-servicesignup',
  templateUrl: './servicesignup.component.html',
  styleUrls: ['./servicesignup.component.css']
})
export class ServicesignupComponent implements OnInit {

  constructor(public as:FormBuilder, public router:Router) { }

  ngOnInit() {
  }
  ServicesignupForm = this.as.group({
    sfname:[],
    son:[],
    sct:[],
    semail:[],
    spwd:[],
    scpwd:[],
    spin:[], 
    sadrs:[], 
  })
  setpwd()
  {
    this.router.navigate(["service/setpwd"])
    console.log(this.ServicesignupForm);
  }
}
