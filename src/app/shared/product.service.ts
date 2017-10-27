import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user';


@Injectable()
export class ProductService {
  private urlAPI:string = 'http://localhost:3000/product';

  constructor(private http:HttpClient) { }

  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.urlAPI);
  }

  addProduct(product):Observable<Product>{
    return this.http.post<Product>(this.urlAPI, product);
  }

  getProductById(id:number):Observable<Product> {
      return this.http.get<Product>(this.urlAPI+'/'+id);
}

  removeProduct(id):Observable<any>{
      return this.http.delete(this.urlAPI+'/'+id);
  }

  updateProduct(id:number, product:Product):Observable<Product> {
    return this.http.patch<Product>(this.urlAPI+'/'+id,product);
}
}