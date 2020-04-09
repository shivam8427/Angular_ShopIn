import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrderService } from 'shared/services/order.service';
import { AuthService } from 'shared/services/auth.service';
import { Subscription, Observable, of } from 'rxjs';
import { Order } from 'shared/models/order';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit,OnDestroy {
  userId  ;
  orders$ ;

  constructor(private orderService:OrderService,private authService :AuthService) {   }

  async ngOnInit() {
   
   
    await this.authService.user
     .switchMap(user => 
      { 
        if(user) return this.orderService.ordersByUserID(user.uid)
        return this.setObservableNull()
      
     }).subscribe(orders=> {
      this.orders$=orders;
      
      
      });
    }
      setObservableNull():Observable<any>
      {
        return of(null);
      }

  

  ngOnDestroy(){
  }

  

}
