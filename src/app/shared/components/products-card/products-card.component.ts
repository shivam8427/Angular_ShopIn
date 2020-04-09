import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'shared/models/Product';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { ShoppingCartItems } from 'shared/models/shopping-cart-items';
import { ShoppingCart } from 'shared/models/Shopping-cart';

@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.css']

})
export class ProductsCardComponent  {
@Input('product') p : Product;
@Input('show-actions') showActions=true;
@Input('shopping-cart') shoppingCart :ShoppingCart ;
  constructor(private cartService : ShoppingCartService) { 
 
  }

  
 addToCart()
{
  
this.cartService.addToCart(this.p);

}

}
