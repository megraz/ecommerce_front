import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-listeproduct',
  templateUrl: './listeproduct.component.html',
  styleUrls: ['./listeproduct.component.css']
})
export class ListeproductComponent implements OnInit {
  listeproducts = [];
  aModifier:Product;
  product:Product;

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe((product)=>this.listeproducts = product)
  }

  addProduct(product:Product) {
    this.productService.addProduct(product).subscribe((product)=>this.listeproducts.push(product));
  }

  removeProduct(id:number){
    this.productService.removeProduct(id).subscribe(() => this.productService.getAllProducts().subscribe((product)=>this.listeproducts = product));
  }

  editProduct(product:Product) {
    this.productService.updateProduct(product.id,product).subscribe(() => console.log(product));
  }

}
