import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../category';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category=new Category();
  msg:string
    constructor(private service:RegistrationService,private router:Router) { }
  
    ngOnInit() {
    }
    Category()
    {
      this.service.addcategory(this.category).subscribe(
        data=>{console.log("Response Received")
        this.msg="Category Added Success"
      
      },
        error =>{ console.log("Exception occured")
        }
      )
    }
    }
