
import { Component } from '@angular/core';
import { CategoryService } from './../../Services/category.service';
import { Category } from './../../Model/category';

import { MessageService } from 'primeng/api';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class  categoryAddComponent{
Categories:Category[]=[];

constructor(
  private fb:FormBuilder,
  private service: CategoryService,
  private messageService:MessageService,
  private router:Router
){}
CategoryForm = this.fb.group({
  name: ['', [Validators.required]],

})

get name(){
  return this.CategoryForm.controls.name as FormControl
}

Add() {
  console.log(this.CategoryForm.value);
  this.service.addcategory(this.CategoryForm.value).subscribe(
    result => {
      this.messageService.add({ severity: 'success', summary: 'Confirmed', detail: 'Record added' });
      setTimeout(() => {

        this.router.navigate(['/categories']);
      }, 1000);
      this.CategoryForm.reset();
    }
  );
}


}




