import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { UserboardComponent } from './userboard/userboard.component';
import { UsersetpwdComponent } from './usersetpwd/usersetpwd.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { BookingserviceComponent } from './bookingservice/bookingservice.component';
import { HttpClientModule } from '@angular/common/http';
import { OlderhistoryComponent } from './olderhistory/olderhistory.component';

@NgModule({
  declarations: [UserloginComponent, UsersignupComponent, UserboardComponent, UsersetpwdComponent, UserdashboardComponent, BookingserviceComponent, OlderhistoryComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class UserModule { }
