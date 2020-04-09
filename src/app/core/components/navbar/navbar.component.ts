import { Component, OnInit, OnDestroy } from '@angular/core';

import { AuthService } from 'shared/services/auth.service';
import { AppUser } from 'shared/models/app-user';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { ShoppingCart } from 'shared/models/Shopping-cart';
import { Observable } from 'rxjs/internal/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy
{
  public appUser:AppUser;
  cart:Observable<ShoppingCart>;
  subscription:Subscription;
  shoppingCartCount:number;
  constructor(private authServiceObj :AuthService , private shoppingCartService:ShoppingCartService)    
  {
        authServiceObj.getAppUser$().subscribe(user=>this.appUser=user);
        
  }

   logOut()
   {
   this.authServiceObj.logOut();
   }

   async ngOnInit()
   {
        this.cart=await this.shoppingCartService.getCart();
        this.subscription= (await this.shoppingCartService.getCart()).subscribe(cart=>{
        this.shoppingCartCount=cart.shoppingCartCount()
      });
   }

   async ngOnDestroy()
   {
     this.subscription.unsubscribe();
   }

}
