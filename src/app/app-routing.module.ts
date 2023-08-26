import { OrderAddComponent } from './OrderModule/Components/order-add/order-add.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './OrderModule/Components/order-list/order-list.component';
import { OrderDetailsComponent } from './OrderModule/Components/order-details/order-details.component';
import { OrderUpdateComponent } from './OrderModule/Components/order-update/order-update.component';

const routes: Routes = [
  { path: 'orders', component: OrderListComponent },
  { path: 'orders/create', component: OrderAddComponent },
  { path: 'orders/details/:id', component: OrderDetailsComponent },
  { path: 'orders/update/:id', component: OrderUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
