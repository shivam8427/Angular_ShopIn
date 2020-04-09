import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthService } from 'app/auth.service';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { ProductsCardComponent } from './components/products-card/products-card.component';
import { AuthGuardService } from './services/auth-guard.service';
import { OrderService } from './services/order.service';
import { ProductAddService } from './services/product-add.service';
import { ReadCategoryService } from './services/read-category.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { UserService } from './services/user.service';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { DataTableModule } from 'angular5-data-table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { MatSnackBarModule } from '@angular/material';



@NgModule({
  declarations: [ProductQuantityComponent,ProductsCardComponent],
  imports: [
    CommonModule,FormsModule,CustomFormsModule,DataTableModule,NgbModule, AngularFireAuthModule,
    AngularFireDatabaseModule,MatSnackBarModule
  ],
  exports:[
    ProductQuantityComponent,ProductsCardComponent,CommonModule,FormsModule,CustomFormsModule,DataTableModule,NgbModule, AngularFireAuthModule,
    AngularFireDatabaseModule,MatSnackBarModule
  ],
  providers:[
    AuthService,AuthGuardService,UserService,ReadCategoryService,ProductAddService,ShoppingCartService,OrderService
  ]
})
export class SharedModule { }
