import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { LanguageModel } from 'src/app/models/languages/language.model';
import { ResponderModel } from 'src/app/models/responders/responder-model';
import { SettingsService } from '../settings/settings.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(
    private settings: SettingsService,
    private httpClient: HttpClient) { }

    getAllLanguages(): Observable<ResponderModel | any>{
      const apiUrl = this.settings.getApiUrl + '/api/Language/GetAllLanguages';
      
      return this.httpClient
        .get(apiUrl, httpOptions)
        .pipe(map(response =>{
          return response;
        }),
        catchError(error =>{
          return this.handleError(error);
        }));
    }

    getLanguageById(id: string): Observable<ResponderModel | any>{
      const apiUrl = this.settings.getApiUrl + '/api/Language/GetLanguageById/' + id;

      return this.httpClient
        .get(apiUrl, httpOptions)
        .pipe(map(response =>{
          return response;
        }),
        catchError(error =>{
          return this.handleError(error);
        }));
    }

    newLanguage(language: LanguageModel): Observable<any>{
      const apiUrl = this.settings.getApiUrl + '/api/Language/CreateLanguage';

      return this.httpClient
        .post<LanguageModel>(apiUrl, language, httpOptions)
        .pipe(map(response =>{
          return response;
        }),
        catchError(error =>{
          return this.handleError(error);
        }));
    }

    updateLanguage(language: LanguageModel): Observable<ResponderModel | any>{
      const apiUrl = this.settings.getApiUrl + '/api/Language/UpdateLanguage';

      return this.httpClient
        .put(apiUrl, language, httpOptions)
        .pipe(map(response =>{
          return response;
        }),
        catchError(error =>{
          return this.handleError(error);        
        }));
    }

    deleteLanguage(id: string): Observable<ResponderModel | any>{
      const apiUrl = this.settings.getApiUrl + '/api/Language/SoftDeleteLanguage?id=' + id;

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


