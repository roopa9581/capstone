import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AdminregistrationComponent } from './adminregistration/adminregistration.component';
import { CategoryComponent } from './category/category.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';

import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import{AdminRoutingModule}from './admin/admin.routing.component'
import{LoginRoutingModule}from './login/login.routing.component';
import { ListComponent } from './list/list.component';
import { CartComponent } from './cart/cart.component';
import { SearchComponent } from './search/search.component';




@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminregistrationComponent,
    CategoryComponent,
    LoginComponent,
    ProductComponent,
   
    RegistrationComponent,
    MainComponent,
    ListComponent,
    CartComponent,
    SearchComponent,

   
   
   
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    LoginRoutingModule,
    AdminRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
