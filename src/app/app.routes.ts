import { Routes } from "@angular/router";
import { NewuserComponent } from "./newuser/newuser.component";
import { NewproductComponent } from "./newproduct/newproduct.component";
import { PgenotfoundComponent } from "./pgenotfound/pgenotfound.component";
import { LoginComponent } from "./login/login.component";
import { NewauthorComponent } from "./newauthor/newauthor.component";
import { NewcategoryComponent } from "./newcategory/newcategory.component";
import { ListeUserComponent } from "./liste-user/liste-user.component";
import { ListeproductComponent } from "./listeproduct/listeproduct.component";
import { ModifierProductComponent } from "./modifier-product/modifier-product.component";



/*
    Les routes vont devoir définir le path (l'url) et 
    le component à associer à ce path. Si l'url match
    un path, le component en question sera instancié et
    placé à l'intérieur de la balise <router-outlet>
*/

export const appRoutes:Routes = [
    {path: 'newuser', component: NewuserComponent},
    {path: 'newproduct', component: NewproductComponent},
    {path: 'login', component: LoginComponent},
    {path: 'newauthor', component: NewauthorComponent},
    {path: 'newcategory', component: NewcategoryComponent},
    {path: 'listeuser', component: ListeUserComponent},
    {path: 'listeproduct', component: ListeproductComponent},
    {path: 'edit', component: ModifierProductComponent},

    {path: '**', redirectTo: ''}
];