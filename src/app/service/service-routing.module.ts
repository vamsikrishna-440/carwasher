import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceboardComponent } from './serviceboard/serviceboard.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ServiceloginComponent } from './servicelogin/servicelogin.component';
import { ServicesignupComponent } from './servicesignup/servicesignup.component';
import { ServicesetpwdComponent } from './servicesetpwd/servicesetpwd.component';
import { ServicedashboardComponent } from './servicedashboard/servicedashboard.component';
import { ServicebookingComponent } from './servicebooking/servicebooking.component';

const routes: Routes = [
  {
    path:'',
    component:ServiceboardComponent
  },
  {
    path:'slogin',
    component:ServiceloginComponent
  },
  {
    path:'ssignup',
    component:ServicesignupComponent
  },
  {
    path:'setpwd',
    component:ServiceloginComponent
  },
  {
    path:'sdash',
    component:ServicedashboardComponent
  },
  {
    path:'vbook',
    component:ServicebookingComponent
  },
  {
    path:'slout',
    component:ServicedashboardComponent
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes),ReactiveFormsModule,FormsModule],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
