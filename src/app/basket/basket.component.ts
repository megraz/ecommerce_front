import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';
import { AuthService } from '../shared/auth.service';
import { Basket } from "../shared/basket";



@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  user:User;
  liste = [];
  
  constructor(private auth:AuthService) { 
    this.auth.user.subscribe((user) => this.user = user)
  }

  ngOnInit() {
  }

}
