import { Router, ActivatedRoute } from '@angular/router';
import { OrderService } from './../../Services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  order: any;

constructor(
  private service: OrderService,
  private router: Router,
  private route: ActivatedRoute
) { }

ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id');
  this.service.getOrderById(id).subscribe(
    response => {
      this.order = response;
      console.log(response);
    });
}

  // Delete(id: number) {

  // }

}
