import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../shared/user';
import { Basket } from "../shared/basket";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pseudo:string;
  mdp:string;
  connected:boolean =  false;
  user:User;


  constructor(private auth:AuthService) { 
    this.auth.user.subscribe((user) => this.user = user)
  }

  ngOnInit() {
  }

  login(){
    this.auth.login(this.pseudo, this.mdp).subscribe(logged => this.connected = logged);
  }

  logout() {
    this.auth.logout();
    this.connected = false;
  }
}



