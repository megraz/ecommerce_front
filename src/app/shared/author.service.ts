import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Author } from './author';
import { NewauthorComponent } from "../newauthor/newauthor.component";

@Injectable()
export class AuthorService {
  private urlAPI:string = 'http://localhost:3000/author';

  constructor(private http:HttpClient) { }

  getAllAuthors():Observable<Author[]>{
    return this.http.get<Author[]>(this.urlAPI);
  }

  addAuthor(author):Observable<Author>{
    return this.http.post<Author>(this.urlAPI, author); 

  }

  getAuthorById(id:number):Observable<Author> {
    return this.http.get<Author>(this.urlAPI+'/'+id);
  }

  removeAuthor(id:number):Observable<any>{
  return this.http.delete(this.urlAPI+'/'+id);
  }
}
