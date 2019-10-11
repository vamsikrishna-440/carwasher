import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor(public http:HttpClient) { }
  baseUrl="https://api.mlab.com/api/1/databases/vamsi/collections/users";
  apiKey="&apiKey=ClSj0HxNv3sPJwS3cZOsbZI9exWxVjqz";

  slogin(y)
  {
    console.log(`${this.baseUrl}?q=${JSON.stringify(y.value)}${this.apiKey}`)
    return this.http.get(`${this.baseUrl}?q=${JSON.stringify(y.value)}${this.apiKey}`);

  }
}
