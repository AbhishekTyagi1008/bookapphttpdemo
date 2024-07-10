import { Component } from '@angular/core';
import { BookService } from '../Services/book.service';
import { Book } from '../Model/book';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent 
{
  allBook:Book[]=[];

  constructor(private bookService:BookService)
  {
    this.allBook=bookService.getAllBooks();
  }


} 
