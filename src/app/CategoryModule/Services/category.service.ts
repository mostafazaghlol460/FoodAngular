import { MasterService } from 'src/app/Services/master.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  base: string = 'category';
  baseData: string = "Detail";
  CategoryUpdate: string = "update"

  constructor(private master: MasterService) { }
  getCategories() {
    return this.master.getAll(this.base);

  }

  addcategory(data: any) {
    return this.master.add(this.base, data);
  }
  getCategoryById(id: number) {
    return this.master.getById(this.base, this.baseData, id);

  }
  updateCategory(id: any, data: any) {
    return this.master.update(this.base, this.CategoryUpdate, id, data);
  }
}

