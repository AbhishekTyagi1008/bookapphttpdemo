import { Injectable, ReflectiveInjector } from '@angular/core';
import { Book } from '../Model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService 
{
  //this will contain all the books as book object
  private allBooks:Book[]=[];

  constructor() { }


  //1.CREATE
  addBook(book:Book)
  {
    book.id=this.generateRandomId();
    this.allBooks.push(book);

  }

  //2.READ
  getAllBooks()
  {
    return this.allBooks;
  }

  generateRandomId()
  {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        result += chars[randomIndex];
    }
    return result;
  }

  getBookById(id:string):Book
  {
      let book:Book;

      for(let i=0;i<this.allBooks.length;i++)
      {
        (this.allBooks[i].id==id)
        {
          book=this.allBooks[i];
          break;
        }
      }

      return book;
  }

  deleteBookById(id:string)
  {
     for(let i=0;i<this.allBooks.length;i++)
     {
      if(this.allBooks[i].id===id)
      {
        this.allBooks.splice(i,1);
        return;
      }
     }
  }

  updateBook(book:Book)
  {
      for(let i=0;i<this.allBooks.length;i++)
      {
        if(this.allBooks[i].id===book.id)
        {
          this.allBooks[i]=book;
        }
      }
  }

}
