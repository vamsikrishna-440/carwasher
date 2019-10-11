import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserserviceService } from '../userservice.service';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  UserloginForm;
  constructor(public as:FormBuilder,public router:Router, public http:HttpClient,public serve:UserserviceService)
   { 
  this.UserloginForm = this.as.group({
    username:[],
    password:[],
    })
  } 
  
 logi(){
   this.serve.login(this.UserloginForm).subscribe((res:any[])=>{
     console.log(res);
         if(res.length!=0){
      this.router.navigate(["user/logi"])
     
  }
    else{
      alert("Entered Invalid Id/Password, Try Again")
    }
   })
  }
  
  ngOnInit() {
  }
  
}

