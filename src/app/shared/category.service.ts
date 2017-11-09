import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Category } from './category';

@Injectable()
export class CategoryService {
  private urlAPI:string = 'http://localhost:3000/category';

  constructor(private http:HttpClient) { }

  getAllCategorys():Observable<Category[]>{
    return this.http.get<Category[]>(this.urlAPI);
  }

  addCategory(author):Observable<Category>{
    return this.http.post<Category>(this.urlAPI, author);
  }

  getCategoryById(id:number):Observable<Category> {
    return this.http.get<Category>(this.urlAPI+'/'+id);
  }

  removeCategory(id):Observable<any>{
    return this.http.delete(this.urlAPI+'/'+id);
}

}
