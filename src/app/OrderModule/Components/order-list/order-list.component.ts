import { Component, OnInit } from '@angular/core';
import { Order } from '../../Model/order';
import { OrderService } from '../../Services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: Order[] = [];

  constructor(private service: OrderService) {}
  getOrders(){
    this.service.getOrders().subscribe(
      Response => this.orders = Response
    );
  }
  ngOnInit(): void {
    this.getOrders();
  }

  Edit(order:Order){

  }
  Delete(id:number){

  }
}
