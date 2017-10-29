import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/category';
import { Author } from '../shared/author';
import { ProductService } from '../shared/product.service';
import { AuthorService } from '../shared/author.service';
import { CategoryService } from '../shared/category.service';
import { Product} from "../shared/product";

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {
  // file:File;
  listeproducts = [];
  listeauthor = [];
  tableaucategory = [];

  
  name: string;
  description: string;
  categoryId: number;
  authorId: number;
  price: number;

  category: Category;
  author: Author;



  constructor(private productService:ProductService, private authorService:AuthorService, private categoryService:CategoryService) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe((products)=>this.listeproducts=products);
    this.categoryService.getAllCategorys().subscribe((categorys)=>this.tableaucategory=categorys);
    this.authorService.getAllAuthors().subscribe((authors)=>this.listeauthor=authors);
  }

  addProduct() {
    this.categoryService.getCategoryById(this.categoryId).subscribe((category)=>this.category=category);
      this.authorService.getAuthorById(this.authorId).subscribe((author)=>this.author=author);
      this.productService.addProduct(new Product(this.name, this.description, this.price, this.category,this.author)).subscribe((category)=>console.log(category));
  }



}
