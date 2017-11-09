import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "./user";

import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs';
import { NewuserComponent } from '../newuser/newuser.component';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class UserService {
  private urlAPI:string = 'http://localhost:3000/user';
    /* Le BehaviorSubject est un type de Subject particulier
   de RxJs qui a constamment une valeur, ce qui fait
   que lorsqu'on se subscribe dessus, on recevra la
   dernière valeur qui a été poussée dans le flux.
   Ce type de subject a besoin d'une valeur par défaut
   au moment de son instanciation, on pourra ensuite
   lui pousser des valeurs avec la méthode .next(value)
  */
user:BehaviorSubject<User> = new BehaviorSubject(null);
  
    
  constructor(private http:HttpClient) { }

  getAllUsers():Promise<NewuserComponent[]>{
    return this.http.get<NewuserComponent[]>(this.urlAPI).toPromise();
}

addUser(user):Promise<NewuserComponent>{
    return this.http.post<NewuserComponent>(this.urlAPI, user).toPromise(); 

}

getUserById(id:number):Observable<User> {
  return this.http.get<User>(this.urlAPI+'/'+id);
}

removeUser(id):Observable<any>{
    return this.http.delete(this.urlAPI+'/'+id);
}

updateUser(id:number, user:User):Observable<User> {
  return this.http.patch<User>(this.urlAPI+'/'+id,
  user);
}


}
