import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pseudo:string;
  mdp:string;


  constructor() { }

  ngOnInit() {
  }

  login(){
    
  }

}
