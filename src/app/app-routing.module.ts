import { OrderAddComponent } from './OrderModule/Components/order-add/order-add.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './OrderModule/Components/order-list/order-list.component';
import { OrderDetailsComponent } from './OrderModule/Components/order-details/order-details.component';
import { OrderUpdateComponent } from './OrderModule/Components/order-update/order-update.component';
import { ProductListComponent } from './ProductModule/Components/product-list/product-list.component';
import { ProductAddComponent } from './ProductModule/Components/product-add/product-add.component';
import { ProductDetailsComponent } from './ProductModule/Components/product-details/product-details.component';
import { ProductUpdateComponent } from './ProductModule/Components/product-update/product-update.component';

const routes: Routes = [
  { path: 'orders', component: OrderListComponent },
  {path:'orders/create',component:OrderAddComponent},
  {path:'orders/details/:id',component:OrderDetailsComponent},
  {path:'orders/update/:id',component:OrderUpdateComponent},
  { path: 'products', component: ProductListComponent },
  {path:'products/create',component:ProductAddComponent},
  {path:'products/details/:id',component:ProductDetailsComponent},
  {path:'products/update/:id',component:ProductUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
