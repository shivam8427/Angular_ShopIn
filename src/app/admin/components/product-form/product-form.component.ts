import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReadCategoryService } from 'shared/services/read-category.service';
import { ProductAddService } from 'shared/services/product-add.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { Product } from 'shared/models/Product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnDestroy{
categories;
result;
progressType;
progressValue;
categorySelected;
productSelectedId;
productSelected : Product ;

  constructor( private categoryObj:ReadCategoryService , private productObj:ProductAddService , private _snackbar : MatSnackBar,private router:Router,private activatedRoute:ActivatedRoute)
   { 
   this.categories=  categoryObj.getCategories();
   this.categorySelected="Default";
   this.productSelectedId= activatedRoute.snapshot.paramMap.get('id') ;
   this.productSelected  = {key:'',title:'',price: 0 ,category:'',imageUrl:'' }; 
   if(this.productSelectedId)
   {
   
    this.productObj.get(this.productSelectedId).valueChanges().pipe(take(1)).subscribe(p => this.productSelected = p);
   }
  }


  ngOnDestroy()
  {
//this.subscription.unsubscribe();
  }

  save(product)
  {
//update operation
    if(this.productSelectedId)
    {
      this.productObj.update(this.productSelectedId,this.productSelected);
      this._snackbar.open("Updated successful","ok",{
        duration :1000});
    }
    else
    {

      //Add operatuion
    this.result=this.productObj.save(product);
    if(this.result)
    {
      this._snackbar.open("add successful","ok",{
        duration :1000
      });
      
    }
  } 
  this.router.navigate(['/admin/products']); 
  }

  delete()
  {
    if(confirm('Are you sure you want to Delete'))
    {
     this.productObj.delete(this.productSelectedId);
     this.router.navigate(['/admin/products']);   
    }
    else
    {
      return;
    }
  }

formatLabel(value : number)
  {
if(value>=10)
{
  return Math.round(value/10)+'%';
}
return value;
  }



}
