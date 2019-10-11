import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usersetpwd',
  templateUrl: './usersetpwd.component.html',
  styleUrls: ['./usersetpwd.component.css']
})
export class UsersetpwdComponent implements OnInit {

  constructor(public as:FormBuilder, public router:Router) { }

  ngOnInit() {
  }
  UserpwdForm=this.as.group({
   epwd:[],
   repwd:[],
  })
  subpwd(){
    this.router.navigate(["user/subpwd"])
    console.log(this.UserpwdForm);
  }
  

}
