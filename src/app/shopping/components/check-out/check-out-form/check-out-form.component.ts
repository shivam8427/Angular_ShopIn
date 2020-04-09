import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCart } from 'shared/models/Shopping-cart';
import { Observable, Subscription } from 'rxjs';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { OrderService } from 'shared/services//order.service';
import { AuthService } from 'shared/services/auth.service';
import { Router } from '@angular/router';
import { Order } from 'shared/models/order';

@Component({
  selector: 'app-check-out-form',
  templateUrl: './check-out-form.component.html',
  styleUrls: ['./check-out-form.component.css']
})
export class CheckOutFormComponent implements OnInit {

@Input('shoppingCart') shoppingCart;
userSubscription:Subscription;
userId:string;
  constructor(private orderService:OrderService,private authService : AuthService ,private router:Router)
   { }

  async ngOnInit() {
  
    this.userSubscription=this.authService.user.subscribe(user=>this.userId=user.uid);
    
  }

  ngOnDestroy()
  {
    this.userSubscription.unsubscribe();
  }


  placeOrder(shipping)
  {
   let order=new Order(this.userId,shipping,this.shoppingCart);
   this.orderService.placeOrder(order).then(result => {
   this.router.navigate(['/order-success/'+ result.key]);
       
   });
 
 }
}
