import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { BookService } from '../Services/book.service';
import { Book } from '../Model/book';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent 
{
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
          this.bookService.getBookById(this.id).subscribe(
            {
              next:responseBook=>{this.book=responseBook;}
              ,
              error:err=>{alert(err);}
            }
          );
        }
  }

  onBookDeleteButtonClicked()
  {
    
    this.bookService.deleteBookById(this.id).subscribe(
      {
        next:response=>{alert("BOOK DELETED");  this.router.navigate(['/show']); }
        ,
        error:err=>{alert(err);}
      }
    )

  }


}
