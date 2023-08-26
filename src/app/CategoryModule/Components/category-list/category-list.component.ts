


import { Component, OnInit } from '@angular/core';
import { Category } from '../../Model/category';
import { CategoryService } from '../../Services/category.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  category: Category[] = [];
  id: number = 0;
  constructor(
    private service: CategoryService, 
    private router: Router) { }

  getCategories() {
    this.service.getCategories().subscribe(
      Response => this.category = Response
    );
  }

  ngOnInit(): void {
    this.getCategories();
  }


}
