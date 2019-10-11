import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { Service1Service } from '../service1.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-servicelogin',
  templateUrl: './servicelogin.component.html',
  styleUrls: ['./servicelogin.component.css']
})
export class ServiceloginComponent implements OnInit {
  ServiceloginForm;
  constructor(public as:FormBuilder, public router:Router, public serve:Service1Service, public http:HttpClient)
   {
    this.ServiceloginForm = this.as.group({
      username:[],
      password:[],
    })
   }
   sdash(){
    this.serve.slogin(this.ServiceloginForm).subscribe((a:any[])=>{
      console.log(a);
          if(a.length!=0){
       this.router.navigate(["service/sdash"])
      
   }
     else{
       alert("Entered Invalid Id/Password, Try Again")
     }
    })
   }

  ngOnInit() {
  }
  
 
}
