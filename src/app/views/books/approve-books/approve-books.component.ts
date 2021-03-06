import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { BookModel } from 'src/app/models/books/book.model';
import { ResponderModel } from 'src/app/models/responders/responder-model';
import { BookService } from 'src/app/services/book/book.service';
import { PermissionService } from 'src/app/services/permissions/permission.service';

@Component({
  selector: 'app-approve-books',
  templateUrl: './approve-books.component.html',
  styleUrls: ['./approve-books.component.css']
})
export class ApproveBooksComponent implements OnInit {
  responder: ResponderModel | any = new ResponderModel;
  books: BookModel[] = [];
  canApprove: boolean = this.userHasPermission('Book.Approve');
  canEdit: boolean = this.userHasPermission('Book.Update');
  canDelete: boolean = this.userHasPermission('Book.SoftDelete');

  constructor(
    private bookService: BookService,
    private permissionService: PermissionService,

  ) { }

  ngOnInit(): void {
    this.getBooksToApprove();
  }

  getBooksToApprove(){
    return this.bookService
      .getBooksToApprove()
      .pipe(first())
      .subscribe(respond =>{
        this.responder = respond;
        if(this.responder.object != null){
          this.books = this.responder.object;
        } else {
          
        }
      })
  }

  userHasPermission(hasPermission: string):boolean{
    return this.permissionService.isPermited(hasPermission);
  }

}
