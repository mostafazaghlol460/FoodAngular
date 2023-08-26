import { ComponentFixture, TestBed } from '@angular/core/testing';

import { categoryAddComponent } from './category-add.component';

describe('CategoryAddComponent', () => {
  let component: categoryAddComponent;
  let fixture: ComponentFixture<categoryAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [categoryAddComponent]
    });
    fixture = TestBed.createComponent(categoryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
