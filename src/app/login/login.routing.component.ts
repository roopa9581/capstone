import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import { AdminregistrationComponent } from '../adminregistration/adminregistration.component';
import { CategoryComponent } from '../category/category.component';
import { ProductComponent } from '../product/product.component';
import { RegistrationComponent } from '../registration/registration.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login.component';



const routes: Routes = [

  {path:'register',component:RegistrationComponent},
  {path:'category',component:CategoryComponent},
  {path:'product',component:ProductComponent},
  {path:'adminlogin',component:AdminComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'adminregister',component:AdminregistrationComponent},
  {
      path:'login',
      component:LoginComponent,
      children:[{
          path:'home',component:HomeComponent
      }]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[HomeComponent]
})
export class LoginRoutingModule { }