import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order-routing.module';
import { BrowserModule } from "@angular/platform-browser";

import {AccordionModule} from 'primeng/accordion';
import {TableModule} from 'primeng/table';
import { OrderListComponent } from './Components/order-list/order-list.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderAddComponent } from './Components/order-add/order-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { OrderDetailsComponent } from './Components/order-details/order-details.component';
import { OrderUpdateComponent } from './Components/order-update/order-update.component';
import {CalendarModule} from 'primeng/calendar';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    OrderListComponent,
    OrderAddComponent,
    OrderDetailsComponent,
    OrderUpdateComponent,
  ],

  imports: [
    CommonModule,
    OrderRoutingModule,
    BrowserModule,
    AccordionModule,
    TableModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    CalendarModule

  ],
  providers: [
    ConfirmationService,
    MessageService,
    DatePipe
  ],
})
export class OrderModule { }
