import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from './shared/user';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  currentUser:Observable<User>;

  constructor(private auth:AuthService){}

  title = 'app';

  ngOnInit(): void {
    this.currentUser = this.auth.user
    
  }

}


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'app';
// }