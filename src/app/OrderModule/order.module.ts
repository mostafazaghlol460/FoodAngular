import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order-routing.module';
import { BrowserModule } from "@angular/platform-browser";

import {AccordionModule} from 'primeng/accordion';
import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OrderRoutingModule,
    BrowserModule,
    AccordionModule,
    TableModule

  ]
})
export class OrderModule { }
