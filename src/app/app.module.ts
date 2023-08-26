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
import {CalendarModule} from 'primeng/calendar';
import { DatePipe } from '@angular/common';
import { LeftSidebarComponent } from './SharedModule/Components/left-sidebar/left-sidebar.component';



@NgModule({
  declarations: [
    AppComponent,
    LeftSidebarComponent,
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
    ConfirmDialogModule,
    CalendarModule
  ],

  providers: [
    ConfirmationService,
    MessageService,
    DatePipe
  ],
  bootstrap: [
    AppComponent,
  ]

})
export class AppModule { }
