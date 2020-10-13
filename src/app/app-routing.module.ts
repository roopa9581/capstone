import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

import { AdminregistrationComponent } from './adminregistration/adminregistration.component';
import { CartComponent } from './cart/cart.component';
import { CategoryComponent } from './category/category.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

import { ProductComponent } from './product/product.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegistrationComponent},
  {path:'category',component:CategoryComponent},
  {path:'product',component:ProductComponent},
  {path:'adminlogin',component:AdminComponent},
  {path:'adminregister',component:AdminregistrationComponent},
  {path:'main',component:MainComponent
  },
  {path:'list',component:ListComponent},
  {path:'cart',component:CartComponent},
  {
    path:'search',component:SearchComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }