import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-adminregistration',
  templateUrl: './adminregistration.component.html',
  styleUrls: ['./adminregistration.component.css']
})
export class AdminregistrationComponent implements OnInit {
  
  admin=new Admin();
  msg:string
    constructor(private service:AdminserviceService,private router:Router) { }
  
    ngOnInit() {
    }
    registeradmin()
    {
      this.service.register(this.admin).subscribe(
      data=>{console.log("Response Received ")
      this.msg="Registration Success"
      this.router.navigate(['/adminlogin'])
    }
      )
    error => console.log("Exception occured")
    this.msg="Data Already Exist Go to Login Page and Login Again"
    }
  
  }