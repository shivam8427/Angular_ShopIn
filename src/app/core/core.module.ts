import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LoginSuccessComponent } from './components/login-success/login-success.component';
import { NavActiveDirective } from 'shared/services/nav-active.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShoppingModule } from 'app/shopping/shopping.module';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from 'app/shopping/components/products/products.component';
import { ShoppingCartComponent } from 'app/shopping/components/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from 'app/shopping/components/check-out/check-out.component';
import { AuthGuardService } from 'shared/services/auth-guard.service';
import { OrderSuccessComponent } from 'app/shopping/components/order-success/order-success.component';
import { MyOrdersComponent } from 'app/shopping/components/my-orders/my-orders.component';
import { AdminProductsComponent } from 'app/admin/components/admin-products/admin-products.component';
import { AdminAuthGuardService } from 'app/admin/services/admin-auth-guard.service';
import { AdminOrdersComponent } from 'app/admin/components/admin-orders/admin-orders.component';
import { ProductFormComponent } from 'app/admin/components/product-form/product-form.component';
import { SharedModule } from 'shared/shared.module';
import { DragDropModule } from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [  NavbarComponent,
    HomeComponent,
    LoginComponent,
    NavActiveDirective, 
     LoginSuccessComponent],
  imports: [
    SharedModule,ShoppingModule,DragDropModule, RouterModule.forChild([])
  ],
  exports:[
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    NavActiveDirective,
     LoginSuccessComponent

  ]
})
export class CoreModule { }
