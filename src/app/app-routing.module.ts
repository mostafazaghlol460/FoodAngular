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
import { categoryAddComponent } from './CategoryModule/Components/Category-add/category-add.component';
import { CategoryListComponent } from './CategoryModule/Components/category-list/category-list.component';
import { CategoryDetailsComponent } from './CategoryModule/Components/Category-details/category-details.component';
import { CategoryUpdateComponent } from './CategoryModule/Components/Category-update/category-update.component';

const routes: Routes = [
  { path: 'orders', component: OrderListComponent },
  { path: 'orders/create', component: OrderAddComponent },
  { path: 'orders/details/:id', component: OrderDetailsComponent },
  { path: 'orders/update/:id', component: OrderUpdateComponent },

  { path: 'products', component: ProductListComponent },
  { path: 'products/create', component: ProductAddComponent },
  { path: 'products/details/:id', component: ProductDetailsComponent },
  { path: 'products/update/:id', component: ProductUpdateComponent },

  { path: 'categories', component: CategoryListComponent },
  { path: 'categories/create', component: categoryAddComponent },
  { path: 'categories/details/:id', component: CategoryDetailsComponent },
  { path: 'category/update/:id', component: CategoryUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
