import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./shared/shared.module') . then (m => m.SharedModule)
  },
  {
    path:'user',
    loadChildren: () => import('./user/user.module') . then (m => m.UserModule)
  },
  {
    path:'service',
    loadChildren: () => import('./service/service.module') . then (m => m.ServiceModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),ReactiveFormsModule,FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
