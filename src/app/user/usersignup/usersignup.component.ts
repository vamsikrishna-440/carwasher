import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent implements OnInit {

  constructor(public as:FormBuilder, public router:Router) { }

  ngOnInit() {
  }
  UsersigninForm = this.as.group({
    usname:[],
    usm:[],
    usotp:[], 
  })
  submit()
  {
    this.router.navigate(["user/setpwd"])
    console.log(this.UsersigninForm);
  }
}
