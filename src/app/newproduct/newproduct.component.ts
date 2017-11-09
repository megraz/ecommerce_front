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
  fichier:FileList;
  listeproducts = [];
  listeauthor = [];
  tableaucategory = [];

  
  name: string;
  description: string;
  price:number;
  categoryId: number;
  authorId: number;
  link:string;
  // pictures:Observable<picture[]>
  // newPic:Picture;
  category: Category;
  author: Author;



  constructor(private productService:ProductService, private authorService:AuthorService, private categoryService:CategoryService) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe((products)=>this.listeproducts=products);
    this.categoryService.getAllCategorys().subscribe((categorys)=>this.tableaucategory=categorys);
    this.authorService.getAllAuthors().subscribe((authors)=>this.listeauthor=authors);
  }

  addProduct() {
    //On crée un FileReader (javascript Natif) qui nous
  //aidera à transformer notre fichier en flux binaire
    let reader = new FileReader();
    reader.onload = (event:ProgressEvent) => {
      this.link = reader.result;
    this.categoryService.getCategoryById(this.categoryId).subscribe((category)=>{
      this.category=category;
    this.authorService.getAuthorById(this.authorId).subscribe((author)=>{
      this.author=author;
    this.productService.addProduct(new Product(this.author,this.name, this.description, this.category, this.price,this.link)).subscribe((category)=>console.log(category));
  });
});
  //On dit au fileReader de lire le fichier sous forme
    //de DataURL (en gros le fichier est transformé en 
    //une string de caractères)
    reader.readAsDataURL(this.fichier[0]);
    }
  }
}
