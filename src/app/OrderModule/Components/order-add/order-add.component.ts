import { Component } from '@angular/core';
import { Order, User } from '../../Model/order';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { OrderService } from '../../Services/order.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.css']
})
export class OrderAddComponent {
  orders: Order[] = [];
  user: User[] = [];

  constructor(
    private fb: FormBuilder,
    private service: OrderService,
    private messageService: MessageService,
    private router: Router
  ) {
    this.service.getAllUser().subscribe(result => this.user = result);
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


  Add() {
    console.log(this.orderForm.value);
    this.service.addOrder(this.orderForm.value).subscribe(
      result => {
        this.messageService.add({ severity: 'success', summary: 'Confirmed', detail: 'Record added' });
        setTimeout(() => {

          this.router.navigate(['/orders']);
        }, 1000);
        this.orderForm.reset();
      }
    );
  }


}
