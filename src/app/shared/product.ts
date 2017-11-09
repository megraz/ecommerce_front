import { Author } from './author';
import { Category } from './category';


export class Product {
    id?:number;
    name:string;
    description:string;
    price:number;
    link:string;
    category:Category;
    author: Author;

    constructor (author:Author,
        name:string,
        description:string,
        category:Category,
        price:number,
        link:string,
        id?:number) {
            this.author = author;
            this.name = name;
            this.description = description;
            this.category = category;
            this.price = price;
            this.link = link;
            this.id = id;
        }

}