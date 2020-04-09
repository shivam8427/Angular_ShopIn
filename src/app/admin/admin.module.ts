import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'shared/shared.module';
import { DataTableModule } from 'angular5-data-table';
import { AuthGuardService } from 'shared/services/auth-guard.service';
import { RouterModule } from '@angular/router';
import { MatSnackBarModule, MatSliderModule } from '@angular/material';



@NgModule({
  declarations: [AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent],
  imports: [
    SharedModule,
    MatSliderModule,
    SharedModule,
    RouterModule.forChild([
      {path:'admin/products',component:AdminProductsComponent ,canActivate : [AuthGuardService,AdminAuthGuardService]},
      {path:'admin/orders',component:AdminOrdersComponent,canActivate : [AuthGuardService,AdminAuthGuardService]},
      {path:'admin/product-form/:id',component:ProductFormComponent ,canActivate : [AuthGuardService,AdminAuthGuardService]},
      {path:'admin/product-form',component:ProductFormComponent,canActivate : [AuthGuardService,AdminAuthGuardService]},
    ]
    )
    
  ],
  providers:[AdminAuthGuardService],
  exports:[AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent]

})
export class AdminModule { }
