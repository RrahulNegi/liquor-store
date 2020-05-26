import { Component, OnInit } from '@angular/core';
import {MessangerService} from 'src/app/services/messanger.service';
import {Product} from 'src/app/models/product';
import {CartItem} from 'src/app/models/cartItem';

import { CartService } from "src/app/services/cart.service";
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 cartItems = [];

  constructor(private messangerService:MessangerService,
  private cartService: CartService) { }

  cartTotal=0;
  
  ngOnInit() {
    this.handleSubscription();
    this.loadCartItems();
  }

  handleSubscription(){
  this.messangerService.getMsg().subscribe((product:Product)=>{
    this.loadCartItems();
    })
 } 

loadCartItems(){
 this.cartService.getCartItems().subscribe((items: CartItem[])=>{
this.cartItems = items;
this.calculateTotal();
})
} 
calculateTotal(){
  this.cartTotal=0;
  this.cartItems.forEach(item=>{
    this.cartTotal+=(item.qty*item.price);
  })
} 

}
