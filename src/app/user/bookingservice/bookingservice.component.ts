import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bookingservice',
  templateUrl: './bookingservice.component.html',
  styleUrls: ['./bookingservice.component.css']
})
export class BookingserviceComponent implements OnInit {

  constructor(public ss:FormBuilder, public router:Router, public http:HttpClient) { }

  
  BookForm = this.ss.group({
    vn:[],
    vt:[],
    vo:[],
    voc:[],
    st:[],
    yes:[],
    no:[],
    area:[],
    pd:[],
    pl:[],  
  })
  
  url="https://api.mlab.com/api/1/databases/vamsi/collections/Booking?apiKey=ClSj0HxNv3sPJwS3cZOsbZI9exWxVjqz";
  boo(x){
    this.http.post(this.url,x.value).subscribe((b)=>{
      console.log(b);
      alert("Ur car is booked For Servicing")
    })
    this.router.navigate(["user/boo"])
    console.log(this.BookForm);
    }
    ngOnInit() {
      }
}