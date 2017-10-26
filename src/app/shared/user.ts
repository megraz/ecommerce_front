export class User {
    id?:number;
    pseudo:string;
    email:string;
    mdp:string;
    token:string;
    

    constructor(pseudo:string, email:string, mdp:string, id?:number){
        this.pseudo = pseudo;
        this.email = email;
        this.mdp = mdp;
        this.id = id;
                }
}