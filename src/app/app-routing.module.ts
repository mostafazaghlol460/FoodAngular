import { OrderAddComponent } from './OrderModule/Components/order-add/order-add.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './OrderModule/Components/order-list/order-list.component';

const routes: Routes = [
  { path: 'orders', component: OrderListComponent },
  {path:'order/create',component:OrderAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
