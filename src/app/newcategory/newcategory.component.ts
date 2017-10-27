import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/category';
import { CategoryService } from '../shared/category.service';

@Component({
  selector: 'app-newcategory',
  templateUrl: './newcategory.component.html',
  styleUrls: ['./newcategory.component.css']
})
export class NewcategoryComponent implements OnInit {
  name:string;
  tableau = [];


  constructor(private categoryService:CategoryService) { }

  ngOnInit() {
    this.categoryService.getAllCategorys().subscribe((categorys) => this.tableau = categorys);
  }

  addCategory(name) {
    this.categoryService.addCategory(new Category(name)).subscribe((category)=>this.tableau.push(category));
  }
  
}

