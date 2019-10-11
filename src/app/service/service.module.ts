import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import { ServiceboardComponent } from './serviceboard/serviceboard.component';
import { ServiceloginComponent } from './servicelogin/servicelogin.component';
import { ServicesignupComponent } from './servicesignup/servicesignup.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ServicesetpwdComponent } from './servicesetpwd/servicesetpwd.component';
import { ServicedashboardComponent } from './servicedashboard/servicedashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicebookingComponent } from './servicebooking/servicebooking.component';


@NgModule({
  declarations: [ServiceboardComponent, ServiceloginComponent, ServicesignupComponent, ServicesetpwdComponent, ServicedashboardComponent, ServicebookingComponent],
  imports: [
    CommonModule,
    ServiceRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class ServiceModule { }
