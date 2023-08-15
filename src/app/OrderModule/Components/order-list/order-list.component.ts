import { Component, OnInit } from '@angular/core';
import { Order } from '../../Model/order';
import { OrderService } from '../../Services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: Order[] = [];

  constructor(private service: OrderService, private router: Router) {}
  ngOnInit(): void {
    this.service.getOrders().subscribe(
      Response => this.orders = Response
    );
  }
}
