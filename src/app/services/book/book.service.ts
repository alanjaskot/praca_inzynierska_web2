import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BookModel } from 'src/app/models/books/book.model';
import { ResponderModel } from 'src/app/models/responders/responder-model';
import { SettingsService } from '../settings/settings.service';
import { UserService } from '../user/user.service';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json'
    }),
  params: new HttpParams(),
};

const USER_ID = 'user-id';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  userId: any = '';

  constructor(
    private httpClient: HttpClient,
    private setting: SettingsService,
    private user: UserService) {
   }

   public createBook(book: BookModel): Observable<ResponderModel | any>{
     const apiUrl = this.setting.getApiUrl + '/api/Book/CreateBook';

     return this.httpClient
      .post<BookModel>(apiUrl, book, httpOptions)
      .pipe(map(response =>{
        return response;
      }), catchError(error =>{
        return this.handleError(error);
      }))
   }

   public updateBook(book: BookModel): Observable<ResponderModel | any>{
     const apiUrl = this.setting.getApiUrl + '/api/Book/UpdateBook';

     return this.httpClient
      .post<BookModel>(apiUrl, book, httpOptions)
      .pipe(map( respond =>{
        return respond;
      }), catchError(error =>{
        return this.handleError(error);
      }));
   }

    public getAllBooks(): Observable<ResponderModel | any>{
     const apiUrl = this.setting.getApiUrl + '/api/Book/GetAllBooks';

     return this.httpClient
      .get(apiUrl, httpOptions)
      .pipe(map(response =>{
        return response;
      }),
      catchError(error => {
        return this.handleError(error);
      }));
   }

  public getBooksToApprove(): Observable<ResponderModel | any>{
    const apiUrl = this.setting.getApiUrl + '/api/Book/GetBooksToAprrove';

     return this.httpClient
      .get(apiUrl, httpOptions)
      .pipe(map(response =>{
        return response;
      }), catchError(error =>{
        return this.handleError(error);
      }));
   }
  
  public getBookById(id: string): Observable<ResponderModel | any>{
     const apiUrl = this.setting.getApiUrl + '/api/Book/GetBookById/' + id;

     return this.httpClient
      .get(apiUrl, httpOptions)
      .pipe(map(response =>{
        return response;
      }),
      catchError(error =>{
        return this.handleError(error);
      }))
   }

   public getBooksListByUserId(id: string): Observable<ResponderModel | any>{
     const apiUrl = this.setting.getApiUrl + '/api/Book/GetBooksByUser/' + id;

     return this.httpClient
      .get(apiUrl, httpOptions)
      .pipe(map(respond =>{
        return respond;
      }), catchError(error =>{
        return this.handleError(error);
      }), catchError(error =>{
        return this.handleError(error);
      }));
   }

   public getBookListByAuthorId(id: string): Observable<ResponderModel | any>{
     const apiUrl = this.setting.getApiUrl + '/api/Book/GetBooksByAuthor/' + id;

     return this.httpClient
      .get(apiUrl, httpOptions)
      .pipe(map(respond =>{
        return respond;
      }), catchError(error => {
        return this.handleError(error);
      }));
   }

   public getBooksListByCategoryId(id: string): Observable<ResponderModel | any>{
    const apiUrl = this.setting.getApiUrl + '/api/Book/GetBooksByCategory/' + id;

    return this.httpClient
     .get(apiUrl, httpOptions)
     .pipe(map(respond =>{
       return respond;
     }), catchError(error => {
       return this.handleError(error);
     }));
  }

  public getHighlightedBooks(): Observable<ResponderModel | any>{
    const apiUrl = this.setting.getApiUrl + '/api/Book/GetHighlithed';

    return this.httpClient
      .get(apiUrl, httpOptions)
      .pipe(map(respond =>{
        return respond;
      }), catchError(error =>{
        return this.handleError(error);
      }));
  }

  public getBooksListByPublisher(id: string): Observable<ResponderModel | any>{
    const apiUrl = this.setting.getApiUrl + '/api/Book/GetBooksByPublisher/' + id;

    return this.httpClient
     .get(apiUrl, httpOptions)
     .pipe(map(respond =>{
       return respond;
     }), catchError(error => {
       return this.handleError(error);
     }));
  }

   public approveBook(id: string): Observable<ResponderModel | any>{
     const apiUrl = this.setting.getApiUrl + '/api/Book/ApproveBooks';

     return this.httpClient
      .put<string>(apiUrl, id, httpOptions)
      .pipe(map(response =>{
        return response;
      }), catchError(error =>{
        return this.handleError(error);
      }))
   }

  public deleteBook(id: string): Observable<ResponderModel | any>{
    const apiUrl = this.setting.getApiUrl + '/api/Book/SoftDeleteBooks/' + id;

    return this.httpClient
      .delete(apiUrl, httpOptions)
      .pipe(map(response =>{
        return response;
      }),
      catchError(error =>{
        return this.handleError(error);
      }));
  }

   private handleError(error: HttpErrorResponse): Observable<never> {
    console.log(`HttpError: ${JSON.stringify(error)}`);

    return throwError(error);
  }

}
