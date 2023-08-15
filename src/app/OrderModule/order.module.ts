import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order-routing.module';
import { BrowserModule } from "@angular/platform-browser";

import {AccordionModule} from 'primeng/accordion';
import {TableModule} from 'primeng/table';
import { OrderListComponent } from './Components/order-list/order-list.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    OrderListComponent,
  ],

  imports: [
    CommonModule,
    OrderRoutingModule,
    BrowserModule,
    AccordionModule,
    TableModule,
    HttpClientModule

  ]
})
export class OrderModule { }
