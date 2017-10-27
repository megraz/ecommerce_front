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
  }

}
