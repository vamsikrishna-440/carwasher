import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-servicebooking',
  templateUrl: './servicebooking.component.html',
  styleUrls: ['./servicebooking.component.css']
})
export class ServicebookingComponent implements OnInit {

  constructor(public http:HttpClient) { }
  booked;
  url="https://api.mlab.com/api/1/databases/vamsi/collections/Booking?apiKey=ClSj0HxNv3sPJwS3cZOsbZI9exWxVjqz";
  ngOnInit() {
  }
  get(){
    this.http.get(this.url).subscribe((s)=>
    {
     this.booked=s;
    })
   }
 

}
