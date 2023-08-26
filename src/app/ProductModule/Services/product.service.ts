import { MasterService } from './../../Services/master.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

 
  base: string = 'product';
  baseCategory :string = 'category';
  productDetails: string = 'Detail';
  productUpdate: string = 'Update';


  constructor(private master:MasterService) { }

  getCategories() {
    return this.master.getAll(this.baseCategory);
  }
  getCategoriesByID(id:any) {
    return this.master.getById(this.baseCategory,this.productDetails,id);
  }
  getProducts() {
    return this.master.getAll(this.base);
  }

  addProduct(data: any) {
    return this.master.add(this.base, data);
  }

  getProductById(id: any) {
    return this.master.getById(this.base, this.productDetails, id);
  }

  deleteProduct(id: number) {
    return this.master.Delete(this.base, id);
  }

  updateProduct(id:any,data: any) {
    return this.master.update(this.base, this.productUpdate,id, data);
  }
}
