import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs';
import { NewuserComponent } from '../newuser/newuser.component';



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
    return this.http.get<NewuserComponent[]>(this.urlApi).toPromise();
}

addUser(user):Promise<NewuserComponent>{
    return this.http.post<NewuserComponent>(this.urlApi, user).toPromise(); 

}
