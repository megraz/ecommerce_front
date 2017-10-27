import { Component, OnInit } from '@angular/core';
import { Author } from '../shared/author';
import { AuthorService } from '../shared/author.service';

@Component({
  selector: 'app-newauthor',
  templateUrl: './newauthor.component.html',
  styleUrls: ['./newauthor.component.css']
})
export class NewauthorComponent implements OnInit {
  name:string;
  tableau = [];
  author:Author;

  constructor(private authorService:AuthorService) { }
  
  ngOnInit() {
    this.authorService.getAllAuthors().subscribe((authors) => this.tableau = authors);
  }

  addAuthor(name) {
    this.authorService.addAuthor(new Author(name)).subscribe((author) => this.tableau.push(author));
  }
  removeAuthor(id:number){
    this.authorService.removeAuthor(id).subscribe(() => this.ngOnInit());
}

}
