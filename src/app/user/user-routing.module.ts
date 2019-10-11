import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserboardComponent } from './userboard/userboard.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersetpwdComponent } from './usersetpwd/usersetpwd.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { BookingserviceComponent } from './bookingservice/bookingservice.component';
const routes: Routes = [
  {
    path:'',
    component:UserboardComponent
  },
  {
    path:'login',
    component:UserloginComponent
  },
  {
    path:'signup',
    component:UsersignupComponent
  },
  {
    path:'setpwd',
    component:UsersetpwdComponent
  },
  {
    path:'subpwd',
    component:UserloginComponent
  },
  {
    path:'logi',
    component:UserdashboardComponent
  },
  {
    path:'book',
    component:BookingserviceComponent
  },
  {
    path:'boo',
    component:UserdashboardComponent
  },
  {
    path:'lout',
    component:UserdashboardComponent
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes),ReactiveFormsModule,FormsModule],
  exports: [RouterModule]
})
export class UserRoutingModule { }
