import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user=new User();
  msg:string
    constructor(private service:RegistrationService,private router:Router) { }
  
    ngOnInit() {
    }
    registeruser()
    {
      this.service.register(this.user).subscribe(
      data=>{console.log("Response Received ")
      this.msg="Registration Success"
      this.router.navigate(['/login'])
    }
      )
    error => console.log("Exception occured")
    this.msg="Data Already Exist Go to Login Page and Login Again"
    }
  
  }
