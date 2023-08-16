import { Injectable } from '@angular/core';
import { MasterService } from 'src/app/Services/master.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  base: string = 'Orders';
  // user: string = '';

  constructor(private master: MasterService) { }

  // getUsers(){
  //   return this.master.getAll()
  // }

  getOrders() {
    return this.master.getAll(this.base);
  }

  addOrder(data: any) {
    return this.master.add(this.base, data);
  }
}
