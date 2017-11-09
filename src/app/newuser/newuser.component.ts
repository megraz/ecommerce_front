import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import * as sha1 from 'sha1';
import { User } from '../shared/user';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { uniqueUsername } from '../shared/validators';
import { AuthService } from '../shared/auth.service';



@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {
  pseudo:string;
  email:string;
  mdp:string;
  user:User;
  tableau = [];
  formulaire:FormGroup;
  constructor(private userService:UserService, private fb:FormBuilder,private auth:AuthService) { }

  ngOnInit() {
    this.userService.getAllUsers().then((users => this.tableau = users));
    this.formulaire = this.fb.group ({
      pseudo:['',[Validators.required],uniqueUsername(this.auth)],
      email:['',[Validators.required]],
      mdp:['',[Validators.required]],
      confirm:'',
})
  }

  // addUser(pseudo, email, mdp) { 
  //   this.userService.addUser({pseudo:pseudo, email:email,mdp: sha1(mdp)}).then((user) => this.tableau.push(user));
  // console.log
  // }
  addUser(){
    this.userService.addUser(new User(
      this.formulaire.value.pseudo, 
      this.formulaire.value.email, 
      this.formulaire.value.mdp)).then();      
    }


    
    removeUser(id:number){
  this.userService.removeUser(id).subscribe(() => this.userService.getAllUsers().then((user)=>this.tableau = user));
}


}
