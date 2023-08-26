import { Category } from './../../Model/category';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../Services/category.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent {
Category:Category[]=[];
id:number=0;

constructor(
  private fb:FormBuilder,
  private service :CategoryService,
  private messageService:MessageService,
  private Router:Router,
  private Route : ActivatedRoute,
  private DatePipe:DatePipe
){
  this.id=Number(this.Route.snapshot.paramMap.get('id'));
  if(this.id){
    this.getData();
  }
}
get name() {
  return this.Categoryform.controls.name as FormControl;
}
getData() {
  this.service.getCategoryById(this.id).subscribe((Categories: Category) => {
    console.log(Categories);
    this.Categoryform.patchValue({
      name: `${Categories.name}`,
     
    })
  });
}

Categoryform = this.fb.group({
  name: ['', [Validators.required]],
 
})

Update() {
  console.log({ ...this.Categoryform.value, 'id': this.id });
  const data: any = 
  {
    id: this.id,
    name: this.name.value,
   
  }
  this.service.updateCategory(this.id , data).subscribe(
    (result:any) => {
      this.messageService.add({ severity: 'success', summary: 'Confirmed', detail: 'Record updated' });
      setTimeout(() => {
        this.Router.navigate(['/categories']);
      }, 1000);
      this.Categoryform.reset();
    }
  );




}

}
