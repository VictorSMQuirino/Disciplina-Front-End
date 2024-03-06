import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponseData } from '../../models/AuthResponseData.model';
import { BehaviorSubject, tap } from 'rxjs';
import { User } from '../../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new BehaviorSubject<User>(new User('', '', '', new Date()));
  isAutenticated: boolean = false;

  constructor(private http: HttpClient) { }

  signupUser(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBEOllR-8MhftFYqaD8uQGcx1CYOkXd-eo',
    {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(
      tap(response => {
        const expirationDate = new Date(new Date().getTime() + +response.expiresIn * 1000);
        const newUser = new User(
          response.email,
          response.localId,
          response.idToken,
          expirationDate
        );

        this.user.next(newUser);
        localStorage.setItem('userData', JSON.stringify(newUser));
      })
    )
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBEOllR-8MhftFYqaD8uQGcx1CYOkXd-eo',
    {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(
      tap(response => {
        const expirationDate = new Date(new Date().getTime() + +response.expiresIn * 1000);
        const newUser = new User(
          response.email,
          response.localId,
          response.idToken,
          expirationDate
        );

        this.user.next(newUser);
        localStorage.setItem('userData', JSON.stringify(newUser));
        this.isAutenticated = true;
      })
    )
  }

  autoLogin() {
    const userData :{
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    
    } = JSON.parse(localStorage.getItem('userData') as string);
    if(!userData) {
      return;
    }

    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );

    if(loadedUser.token) {
      this.user.next(loadedUser);
    }
  }

  logout() {
    this.user.next(new User('', '', '', new Date()));
    this.isAutenticated = false;
  }
}
