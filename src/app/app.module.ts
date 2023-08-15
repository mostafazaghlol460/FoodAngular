import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderModule } from './OrderModule/order.module';


// primeng
import {AccordionModule} from 'primeng/accordion';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {MenuModule} from 'primeng/menu';


@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    TableModule,
    OrderModule,
    ButtonModule,
    MenuModule

  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
