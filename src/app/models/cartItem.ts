import { Product } from "src/app/models/product";

export class CartItem {
    id: number;
    productId: number;
    productTitle : string;
    price: number;
    qty: number;
    
   constructor(id,product: Product,qty = 1){
    this.id=id;
    this.productId=product.id;
    this.productTitle=product.name;
    this.price=product.price;
    this.qty= qty;
   } 
}
