import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ServerLinks } from 'src/app/app.consts';
import { User } from '../models/user.interface';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        ` Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError('Something bad happened; please try again later.');
  }

  public getUserInfo(): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('authToken')}`,
      }),
    };

    return this.http.get<User>(ServerLinks.USER_INFO, httpOptions);
  }

  public addItemToCard(itemId: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: '*/*',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('authToken')}`,
      }),
    };

    return this.http.post(ServerLinks.USER_CART, { id: itemId }, httpOptions);
  }

  public deleteItemFromCart(itemId: string): Observable<unknown> {
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: '*/*',
        Authorization: `Bearer ${localStorage.getItem('authToken')}`,
      }),
    };

    return this.http.delete(
      `${ServerLinks.USER_CART}?id=${itemId}`,
      httpOptions
    );
  }
}
