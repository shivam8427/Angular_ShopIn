import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'shared/models/Product';
import { ShoppingCart } from 'shared/models/Shopping-cart';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent implements OnInit {
  @Input('product') p : Product;
  @Input('shopping-cart') shoppingCart :ShoppingCart;
    constructor(private cartService : ShoppingCartService) { }
  
    ngOnInit() {
    }
    
   addToCart()
  {
    
  this.cartService.addToCart(this.p);
  }
  
  removeFromCart()
  {
  this.cartService.removeFromCart(this.p);
  }
  
 
  
}
