import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminregistrationComponent } from '../adminregistration/adminregistration.component';
import { CategoryComponent } from '../category/category.component';
import { LoginComponent } from '../login/login.component';
import { ProductComponent } from '../product/product.component';
import { RegistrationComponent} from '../registration/registration.component';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegistrationComponent},
  {path:'category',component:CategoryComponent},
  {path:'product',component:ProductComponent},
  {path:'adminlogin',component:AdminComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'adminregister',component:AdminregistrationComponent},
  {
      path:'adminlogin',
      component:AdminComponent,
      children:[{
          path:'dashboard',component:DashboardComponent
      }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[DashboardComponent]
})
export class AdminRoutingModule { }