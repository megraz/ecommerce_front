import { Routes } from "@angular/router";
import { NewuserComponent } from "./newuser/newuser.component";
import { NewproductComponent } from "./newproduct/newproduct.component";





/*
    Les routes vont devoir définir le path (l'url) et 
    le component à associer à ce path. Si l'url match
    un path, le component en question sera instancié et
    placé à l'intérieur de la balise <router-outlet>
*/

export const appRoutes:Routes = [
    {path: 'newuser', component: NewuserComponent},
    {path: 'newproduct', component: NewproductComponent},
];