import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderModule } from './OrderModule/order.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// primeng
import {AccordionModule} from 'primeng/accordion';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {MenuModule} from 'primeng/menu';
import {MessageModule} from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

import { ConfirmationService,MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ProductListComponent } from './ProductModule/Components/product-list/product-list.component';
import { ProductAddComponent } from './ProductModule/Components/product-add/product-add.component';
import { ProductUpdateComponent } from './ProductModule/Components/product-update/product-update.component';
import { ProductDetailsComponent } from './ProductModule/Components/product-details/product-details.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductAddComponent,
    ProductUpdateComponent,
    ProductDetailsComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    TableModule,
    OrderModule,
    ButtonModule,
    MenuModule,
    FormsModule,
    ReactiveFormsModule,
    MessageModule,
    MessagesModule,
    ToastModule,
    BrowserAnimationsModule,
    ConfirmDialogModule
  ],

  providers: [
    ConfirmationService,
    MessageService
  ],
  bootstrap: [
    AppComponent,
  ]

})
export class AppModule { }
