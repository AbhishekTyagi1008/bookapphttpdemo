import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../Services/book.service';
import { Book } from '../Model/book';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

  id:string|undefined="";
  book:Book|undefined;

  constructor(private activatedRoute:ActivatedRoute,
  private bookService:BookService,private router:Router)
  {
      this.id=this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void 
  {
      if(this.id!=undefined)
        {
         this.book= this.bookService.getBookById(this.id);
        }
  }

  onBookUpdateFormSumbit(bookUpdateForm:NgForm)
  {
    this.bookService.updateBook(this.book);
    alert("BOOK UPDATED");
    this.router.navigate(['/detail',this.book.id]);
  }
}
 