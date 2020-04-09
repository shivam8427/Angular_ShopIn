import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { HomeComponent } from 'app/core/components/home/home.component';
import { AuthGuardService } from 'shared/services/auth-guard.service';
import { SharedModule } from 'shared/shared.module';

import { CheckOutFormComponent } from './components/check-out/check-out-form/check-out-form.component';
import { CheckOutSummaryComponent } from './components/check-out/check-out-summary/check-out-summary.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { ProductsFilterComponent } from './components/products/products-filter/products-filter.component';
import { ProductsComponent } from './components/products/products.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';



@NgModule({
  declarations: [  ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    CheckOutSummaryComponent,
    CheckOutFormComponent,
    ProductsFilterComponent],
  
    imports: [
    SharedModule, MatButtonModule,RouterModule.forChild(
    [
      {path:'home',component:HomeComponent},
      {path:'products',component:ProductsComponent},
      {path:'shopping-cart',component:ShoppingCartComponent},
      {path:'check-out',component:CheckOutComponent ,canActivate : [AuthGuardService]},
      {path:'order-success/:id',component:OrderSuccessComponent},
      {path:'my-orders',component:MyOrdersComponent},
      ])
      
  
  ],

  exports:[
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    CheckOutSummaryComponent,
    CheckOutFormComponent,
    ProductsFilterComponent]
})
export class ShoppingModule { }
