import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductAddService } from 'shared/services/product-add.service';
import { Subscription } from 'rxjs';
import { Product } from 'shared/models/Product';
import {DataTableResource} from 'angular5-data-table';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit ,OnDestroy{
products : Product[];
subscription: Subscription;
tableResource:DataTableResource<Product>;
items:Product[] =[];
itemsCount:number;

  constructor( private productsObj:ProductAddService) { 
    this.subscription=productsObj.getAll().subscribe(p=>
      {
      this.products=p;
     
     this.initializeDataTable(p);
     
      });
  }
  private initializeDataTable(p:Product[])
  {
    this.tableResource=new DataTableResource(p);
    this.tableResource.query({offset:0})
    .then(items=>this.items=items);
    this.tableResource.count()
    .then(count=>this.itemsCount=count);
    
  }
  ngOnInit() {
  }
  ngOnDestroy()
  {
    this.subscription.unsubscribe();
  }

 
reloadItems(params)
{
  if(!this.tableResource) return;
  this.tableResource.query(params)
  .then(items=>this.items=items);
  
  
}

filter(query :string)
{
  let filteredProducts=(query) ? 
  this.products.filter(p=>p.title.toLowerCase().includes(query.toLowerCase())):this.products;
  this.initializeDataTable(filteredProducts);
}

}
