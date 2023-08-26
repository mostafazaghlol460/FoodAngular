import { Component } from '@angular/core';
import { Order, User } from '../../Model/order';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { OrderService } from '../../Services/order.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-order-update',
  templateUrl: './order-update.component.html',
  styleUrls: ['./order-update.component.css']
})
export class OrderUpdateComponent {
  orders: any;
  user: any;
  id: number = 0;


  constructor(
    private fb: FormBuilder,
    private service: OrderService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe

  ) {
    this.service.getAllUser().subscribe(result => this.user = result);
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    if (this.id) {
      this.getData();
    }
  }

  getData() {
    this.service.getOrderById(this.id).subscribe((orders: Order) => {
      console.log(orders);
      this.orders.date =this.datePipe.transform(this.orders.date, 'dd-MM-yy')
      this.orderForm.patchValue({
        date: `${orders.date}`,
        quantity: `${orders.quantity}`,
        total: `${orders.total}`,
        userId: `${orders.userName}`
      })
    });
  }


  orderForm = this.fb.group({
    date: ['', [Validators.required]],
    quantity: ['', [Validators.required]],
    total: ['', [Validators.required]],
    userId: ['', [Validators.required]]
  })

  get date() {
    return this.orderForm.controls.date as FormControl;
  }
  get quantity() {
    return this.orderForm.controls.quantity as FormControl;
  }
  get total() {
    return this.orderForm.controls.total as FormControl;
  }
  get userId() {
    return this.orderForm.controls.userId as FormControl;
  }

  Update() {
    console.log({ ...this.orderForm.value, 'id': this.id });
    const newOrder: any = {

      id:this.id,
      date:this.date.value,
      quantity:this.quantity.value,
      total:this.total.value,
      userId:this.userId.value,
    }
    this.service.updateOrder(newOrder).subscribe(
      result=>{
        this.orderForm.reset();
      }
    );
  }
}
