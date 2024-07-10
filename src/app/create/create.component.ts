import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from '../Model/book';
import { BookService } from '../Services/book.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent 
{

  constructor(private bookService:BookService){}
  
  onBookFormSumbit(bookForm:NgForm)
  {
    let book:Book=
    {
      title: bookForm.value.title,
      author: bookForm.value.author,
      date: bookForm.value.date,
      price: bookForm.value.price,
      genre: bookForm.value.genre,
      pages: bookForm.value.pages,
      description: bookForm.value.desc,
      coverpage: bookForm.value.curl
    }

    this.bookService.addBook(book);
    alert("BOOK CREATED");
    bookForm.reset;


    
  }
 
}
