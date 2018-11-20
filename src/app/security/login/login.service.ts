import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import { User } from './user.model';
import { MEAT_API } from '../../app.api';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';

@Injectable()
export class LoginService {

  public user: User;
  public lastUrl: string;

  constructor(private router: Router, private http: HttpClient) {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => this.lastUrl = event.url);
  }

  login({ email, password }): Observable<User> {
    return this.http.post<User>(`${MEAT_API}/login`, { email, password })
      .do((user: User) => this.user = user);
  }

  logout(): void {
    this.user = undefined;
  }

  isLoggedIn(): boolean {
    return !!this.user;
  }

  handleLogin(path: string = this.lastUrl) {
    this.router.navigate(['/login', btoa(path)]);
  }

}
