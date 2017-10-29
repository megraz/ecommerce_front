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
import { PgenotfoundComponent } from './pgenotfound/pgenotfound.component';
import { NewauthorComponent } from './newauthor/newauthor.component';
import { AuthorService } from './shared/author.service';
import { NewcategoryComponent } from './newcategory/newcategory.component';
import { CategoryService } from './shared/category.service';
import { ListeUserComponent } from './liste-user/liste-user.component';
import { ListeproductComponent } from './listeproduct/listeproduct.component';
import { ModifierProductComponent } from './modifier-product/modifier-product.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewuserComponent,
    NewproductComponent,
    PgenotfoundComponent,
    NewauthorComponent,
    NewcategoryComponent,
    ListeUserComponent,
    ListeproductComponent,
    ModifierProductComponent
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
    ProductService,
    AuthorService,
    CategoryService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
