import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductAddService } from 'shared/services/product-add.service';
import { ReadCategoryService } from 'shared/services/read-category.service';
import { ActivatedRoute } from '@angular/router';

import { Product } from 'shared/models/Product';
import 'rxjs/add/operator/switchMap'
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { Subscription, Observable } from 'rxjs';
import { ShoppingCart } from 'shared/models/Shopping-cart';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products : Product[] = [];
filteredProducts :Product[] =[];
categorySelected :string ;
cart$:Observable<ShoppingCart>;


  constructor(private productObj : ProductAddService  , private route : ActivatedRoute ,private shoppingCartService:ShoppingCartService) {
    //other way to subscribe using swithch map which helps to switch the subscription to other subscribe by returning observable

  }

  async ngOnInit() {
    this.cart$=await this.shoppingCartService.getCart();
    this.populateProducts();
    }
  
   
    private populateProducts()
    {
      this.productObj
      .getAll()
      .switchMap(p => {
          this.products = p;
          return this.route.queryParamMap
         })
      .subscribe(params=> {
       this.categorySelected=params.get('category');
       this.applyFilter();
      
     });
     
      
    }

    private applyFilter(){
      this.filteredProducts=(this.categorySelected) ?
      this.products.filter(p=>p.category == this.categorySelected) :
      this.products;

    }
 

}



/*
ONE WAY TO PUT CODE IN CONSTRUCTOR
 //putting products from database to products array for filtering
    this.productObj.getAll().subscribe(p =>
      {
         this.products = p;
    
         //subscribing route to get category value after getting all products 
      route.queryParamMap.subscribe(params=>{
     
      this.categorySelected=params.get('category');
      //filtering products accordng to category
      this.filteredProducts=(this.categorySelected) ?
      this.products.filter(p=>p.category == this.categorySelected) :
      this.products;
      console.log("filter" + this.categorySelected);
 });  
      
      
      });
   
*/