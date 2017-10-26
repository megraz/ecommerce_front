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

  login(username:string,pass:string):Observable<boolean> {
    
    return this.http.get<User[]>(this.urlAPI+'?username='+username+'&password='+pass)
    .map((users) => {
      if(users.length === 1) {
        localStorage.setItem('token', users[0].token);
        this.user.next(users[0]);
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

  getByUsername(username:string):Observable<User[]> {
    return this.http.get<User[]>(this.urlAPI+'?username='+username);
  }

  getByToken(token:string):Observable<User> {
    return this.http.get<User[]>(this.urlAPI+'?token='+token)
    .map((users) => {
      if(users.length === 1) {
        return users[0];
      }
      return null
    });
  }

  
}
