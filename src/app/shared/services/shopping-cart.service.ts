import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Product } from 'shared/models/Product';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import { take, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ShoppingCartItems } from 'shared/models/shopping-cart-items';
import { ShoppingCart } from 'shared/models/Shopping-cart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db : AngularFireDatabase) { }

  private create()
  {
   return this.db.list('/shopping-carts').push({
     dateCreated : new Date().getTime()
   });
  }

async getCart() :Promise<Observable<ShoppingCart>>
{
  let cartId=await this.getOrCreateCartId();
  console.log('cartId' + cartId);
  let cart= this.db.object<ShoppingCart>('/shopping-carts/'+ cartId).valueChanges()
  .map((x) => new ShoppingCart(x.items));
  //cart.take(1).subscribe(cart => console.log('hi' + cart.items) )
  
  return cart;

}


private getItem(cartId :string,productId:string)
{
  return this.db.object<ShoppingCartItems>('/shopping-carts/'+cartId+'/items/'+productId);
}

 getItems(cartId :string) : Observable<ShoppingCartItems[]>
{
  return this.db.object<ShoppingCartItems[]>('/shopping-carts/'+cartId+'/items').valueChanges();
}

//with this async we  don't have to wait for create method coz for method retuening promises we have to use then but if we want them to use as synvhronous method we can use await
 async getOrCreateCartId(){
  let cartId=localStorage.getItem('cartId');
  if(cartId) return cartId;
  //this.cartService.create().then(result => localStorage.setItem('cartId',result.key));
  let result= await this.create();
  localStorage.setItem('cartId',result.key);
  return result.key;
}

 async addToCart(product : Product )
{
  this.updateItem(product,1);
/*if(item) items.update({quantity:item['quantity']+1})
else items.set({product:product ,quantity:1}) */
  /*let items$= this.db.object('/shopping-carts/'+ cartId +'/items/'+ product.key).valueChanges();
 let items= this.db.object('/shopping-carts/'+ cartId +'/items/'+ product.key);
 items$.pipe(take(1)).subscribe(item => {
   if(item) items.update({qauntity : item['qauntity'] + 1});
 
 else items.set({qauntity:1,product:product})});

}*/
}
async removeFromCart(product : Product )
{
this.updateItem(product,-1);
}

async updateItem(product:Product,change:number)
{
  let cartId = await this.getOrCreateCartId();
  let items=this.getItem(cartId,product.key);
  items.valueChanges().pipe(take(1)).subscribe(item => {
     if(item) {items.update({
       title:product.title,
       imageUrl:product.imageUrl,
       price:product.price,
       quantity:item['quantity'] + change})
     }
     else
     {
      items.update({
        title:product.title,
        imageUrl:product.imageUrl,
        price:product.price,
        quantity:1})
     }
    })
}
async clearCart()
{
  let cartId=await this.getOrCreateCartId();
  this.db.object("/shopping-carts/"+ cartId +"/items").remove();

}

}