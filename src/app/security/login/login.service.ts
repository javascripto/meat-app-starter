import { Observable } from 'rxjs';
import { User } from './user.model';
import { MEAT_API } from '../../app.api';
import { Injectable } from '@angular/core';
import { tap, filter } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';

@Injectable()
export class LoginService {

  public user: User;
  public lastUrl: string;

  constructor(private router: Router, private http: HttpClient) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => this.lastUrl = event.url);
  }

  login({ email, password }): Observable<User> {
    return this.http.post<User>(`${MEAT_API}/login`, { email, password })
      .pipe(
        tap((user: User) => {
          this.user = user;
          sessionStorage.setItem('user', JSON.stringify(user));
        }));
  }

  logout(): void {
    this.user = undefined;
    sessionStorage.removeItem('user');
  }

  isLoggedIn(): boolean {
    const user = JSON.parse(sessionStorage.getItem('user'));
    if (user) {
      this.user = user;
    }
    return !!this.user;
  }

  handleLogin(path: string = this.lastUrl) {
    this.router.navigate(['/login', btoa(path)]);
  }

}
