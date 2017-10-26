import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, Validator, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NewuserComponent } from './newuser/newuser.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { UserService } from './shared/user.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { ProductService } from './shared/product.service';
import { AuthService } from './shared/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewuserComponent,
    NewproductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [AuthService,
    UserService,
    ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
