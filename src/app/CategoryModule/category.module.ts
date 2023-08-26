import { CategoryRoutingModule } from './category-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from "@angular/platform-browser";

import {AccordionModule} from 'primeng/accordion';
import {TableModule} from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import {CalendarModule} from 'primeng/calendar';
import { DatePipe } from '@angular/common';

import { CategoryDetailsComponent } from './Components/Category-details/category-details.component';
import { categoryAddComponent } from './Components/Category-add/category-add.component';
import { CategoryUpdateComponent } from './Components/Category-update/category-update.component';
import { CategoryListComponent } from './Components/category-list/category-list.component';


@NgModule({
  declarations: [
    
    categoryAddComponent,
    CategoryDetailsComponent,
    CategoryUpdateComponent,
    CategoryListComponent,
  ],

  imports: [
    CommonModule,
    CategoryRoutingModule,
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
export class CategoryModule { }
