import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppState } from '../../redux/store/app.state';
import { getUserInfo } from '../../redux/actions/user.actions';
import { ServerLinks } from 'src/app/app.consts';
import { Login } from 'src/app/shop/models/login.interface';
import { Token } from 'src/app/shop/models/token.interface';
import { Register } from 'src/app/shop/models/register.interface';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public isLogin$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor(private http: HttpClient, private store: Store<AppState>) {}

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

  public login(user: Login): void {
    this.loginUser(user).subscribe((res) => {
      this.setAuthToken(res);
      this.isLogin$.next(!!this.authToken);
      this.store.dispatch(getUserInfo());
    });
    localStorage.setItem('userLogin', user.login);
  }

  public loginUser(user: Login): Observable<Token> {
    return this.http
      .post<Token>(ServerLinks.USER_LOGIN, user)
      .pipe(catchError(this.handleError));
  }

  private addUser(user: Register): Observable<Register | Token> {
    return this.http
      .post<Register>(ServerLinks.USER_REGISTER, user)
      .pipe(catchError(this.handleError));
  }

  get authToken(): string | null {
    return localStorage.getItem('authToken');
  }

  private setAuthToken(response: Token): void {
    localStorage.setItem('authToken', response.token);
  }

  public register(user: Register): void {
    this.addUser(user).subscribe((res) => {
      this.setAuthToken(res as Token);
      this.isLogin$.next(!!this.authToken);
      this.store.dispatch(getUserInfo());
    });
    localStorage.setItem('userLogin', user.login);
  }

  public logout(): void {
    this.isLogin$.next(false);
    localStorage.clear();
  }

  public isAuth(): boolean {
    this.isLogin$.next(!!this.authToken);
    return !!this.authToken;
  }
}
