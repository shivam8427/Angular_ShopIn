

export class ShoppingCartItems
{
     title:string; 
    imageUrl:string;
    price:number;
    quantity:number =0;
    key:string;

get totalPrice() : number
{
    return this.price *this.quantity; 
}

}