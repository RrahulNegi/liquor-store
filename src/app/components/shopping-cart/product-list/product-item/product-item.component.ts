import { Component, OnInit, Input } from '@angular/core';
import {Product} from 'src/app/models/product';
import {MessangerService} from 'src/app/services/messanger.service';
import { CartService } from "src/app/services/cart.service";
import { WishlistService } from "src/app/services/wishlist.service";


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() productItem:Product;
  
  @Input() addedToWishlist: boolean;

  constructor(private messangerService:MessangerService,
    private cartService : CartService,
    private wishlistService: WishlistService
  ) { }
    ngOnInit() {
     this.loadAllWishlist();
  }
  handleAddToCart(){
    this.cartService.addProductToCart(this.productItem).subscribe(()=>{
      this.messangerService.sendMsg(this.productItem);
      
    })
  }
  loadAllWishlist(){
    this.wishlistService.getWishlist();
  }

 handleAddToWishlist(){
  this.wishlistService.addToWishlist(this.productItem.id).subscribe((wishlist)=>{
    console.log(wishlist)
    this.addedToWishlist = true;
    console.log("handleAddToWishlist:"+this.productItem.id+" :: "+ this.addedToWishlist);
    
  });
 } 

handleRemoveFromWishlist(){
  this.wishlistService.removeFromWishlist(this.productItem.id).subscribe(()=>{
    this.addedToWishlist = false;
  })
  console.log("handleRemoveFromWishlist:"+this.productItem.id+" :: "+ this.addedToWishlist);
  
} 
}
