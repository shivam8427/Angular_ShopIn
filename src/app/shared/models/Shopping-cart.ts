import { ShoppingCartItems } from './shopping-cart-items';
import { OnInit } from '@angular/core';
import { Product } from './Product';

export class ShoppingCart implements OnInit

{
    sum:number;
    itemsArray:ShoppingCartItems[] =[] ; 
    constructor(public items: {[productId: string] : ShoppingCartItems} )
    {
      this.items=items || {};
        for(let productId in items)
        {
            let item=items[productId];
            let itemRef = new ShoppingCartItems();
            Object.assign(itemRef,item);
            itemRef.key=productId;
            this.itemsArray.push(itemRef);
            
        }
    }
    async ngOnInit()
    {
        //let cartId=await this. shoppingCartService.getOrCreateCartId();
        //this.shoppingCartService.getItems(cartId).subscribe(items => this.items =items);
    }

    public  shoppingCartCount()
    {
     let count = 0;
     for (let productId in this.items){
         count += this.items[productId].quantity;
     }   
     console.log('count ' + count);
     return count;
    }

     get totalCartPrice()
     {
         let sum=0;
       for(let productId in this.items)
       {
           sum+=(this.items[productId].price)*(this.items[productId].quantity);          //items[productId].totalPrice property to define in shpping-cart-items
       }
       return sum;
     }

     getQuantity(product :Product) : number
     {
        
       let item =this.items[product.key] ||{product:product,quantity:0};
       console.log("each item--"+ item);
       if(item)
       {
           return item.quantity;

       }

       else{
        console.log("lolo")
           return 0;
           
       }
     

    /*get ProductIDs(){
    return Object.keys(this.items);
    } */

}
}