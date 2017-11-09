import { User } from "./user";
import { Product } from "./product";



export class Basket {
    user:User;
    id?:number;
    produit?:Product[];

    constructor(user:User, id?:number) {
        this.user=user;
        this.id=id
    }

    
}