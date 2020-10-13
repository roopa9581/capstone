import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  admin=new Admin();
msg:string;
  constructor(private service:AdminserviceService,private router:Router) { }

  ngOnInit() {
  }
loginadmin()
{
  this.service.adminservice(this.admin).subscribe(
    data=>{console.log("Response Received")
    this.msg="Login Success"
    this.router.navigate(['/dashboard'])
  },
    error =>{ console.log("Exception occured")
    this.msg="Bad Credentials ,Please Enter Valid Name and Password"}
  )
}  
  
}
