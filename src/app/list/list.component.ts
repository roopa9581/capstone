import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Product } from '../product';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
private productlist:Product[]
  constructor(private service:RegistrationService, private cartService: CartService,private router:Router) { }

  ngOnInit() {
    this.service.getallproducts().subscribe(res=>{this.productlist=res})
  }
  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
    this.router.navigate['/cart']
  }
}
