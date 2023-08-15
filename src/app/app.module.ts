import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderListComponent } from './OrderModule/Components/order-list/order-list.component';

// primeng
import {AccordionModule} from 'primeng/accordion';
import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [
    AppComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    TableModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
