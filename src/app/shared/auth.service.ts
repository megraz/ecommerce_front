import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  user:BehaviorSubject<User> = new BehaviorSubject(null);
  urlAPI:string = 'http://localhost:3000/user';
  token:string;

  constructor(private http:HttpClient) {
    this.init()
  }

  init() {
    console.log(localStorage)
    this.token = localStorage.getItem('token');
    if(this.token) {
      let expiration = parseInt(this.token.split('|')[1]);
      if(expiration > new Date().getTime()){
        this.getByToken(this.token).subscribe((user) =>{
          this.user.next(user);
        }
        );
      }
} 
  }

  login(pseudo:string,mdp:string):Observable<boolean> {
    
    return this.http.post<User>(this.urlAPI, {pseudo:pseudo,mdp:mdp})
    .map((user) => {
      if(user) {
        localStorage.setItem('token', user.token);
        this.user.next(user);
        return true;
      }
      return false;
    });
  }

  logout():void {
    //Au logout, on supprime le token des localStorage
    localStorage.removeItem('token');
    this.user.next(null);
  }

  signup(user:User): Observable<User> {
    return this.http.post<User>(this.urlAPI, user);
  }

  getByPseudo(pseudo:string):Observable<User[]> {
    return this.http.get<User[]>(this.urlAPI+'?pseudo='+pseudo);
  }

  getByToken(token:string):Observable<User> {
    return this.http.post<User>(this.urlAPI+'/token', {token:token});
  }

  
}
