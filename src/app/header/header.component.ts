import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';
import { UserService } from '../shared/user.service';
import { Basket } from '../shared/basket';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user:User;
  productBasket:Basket[]=[];
 
  




  constructor(private userService:UserService,) { }

  ngOnInit() {
  }

}
