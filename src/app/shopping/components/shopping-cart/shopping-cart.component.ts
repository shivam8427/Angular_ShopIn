import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { ShoppingCart } from 'shared/models/Shopping-cart';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart:Observable<ShoppingCart>;
  tp:number =0;
  constructor(private shoppingCartService :ShoppingCartService,private router:Router) {
  }

  async ngOnInit() {
    this.cart= await this.shoppingCartService.getCart();
  }

  async clearCart()
{
   await this.shoppingCartService.clearCart();
}

addMoreItems()
{
this.router.navigate(['/']);
}


}
