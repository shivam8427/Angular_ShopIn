import { Injectable } from '@angular/core';
import { AngularFireDatabase, snapshotChanges } from '@angular/fire/database';
import { ShoppingCartService } from './shopping-cart.service';
import { Order } from 'shared/models/order';
import { Observable } from 'rxjs/internal/Observable';
import { query } from '@angular/animations';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private db:AngularFireDatabase,private shoppingCartService:ShoppingCartService) { }

  async placeOrder(order)
  {
    let result= this.db.list('/orders').push(order);
    await this.shoppingCartService.clearCart();
    return result;

  }

  getOrders()
  {
   return this.db.list<Order>('/orders').valueChanges();
  }

  async ordersByUserID(userId)
  {
     return this.db.list<Order>('/orders',ref=>{
       console.log('user='+userId);
   return ref.orderByChild('userId').equalTo(userId)
     }).valueChanges();
  }  
 }