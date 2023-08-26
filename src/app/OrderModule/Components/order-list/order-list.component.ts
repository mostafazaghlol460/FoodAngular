import { Component, OnInit } from '@angular/core';
import { Order } from '../../Model/order';
import { OrderService } from '../../Services/order.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  order: Order[] = [];
  id: number = 0;


  constructor(
    private service: OrderService,

    private router: Router
  ) { }
  getOrders() {
    this.service.getOrders().subscribe(
      Response => this.order = Response
    );
  }
  ngOnInit(): void {
    this.getOrders();
  }

  Edit(order: Order) {
   
  }
  

}
