import 'rxjs/add/operator/do';
import { User } from './user.model';
import { Router } from '@angular/router';
import { MEAT_API } from '../../app.api';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  public user: User;

  constructor(private router: Router,
              private http: HttpClient) { }

  login({ email, password }): Observable<User> {
    return this.http.post<User>(`${MEAT_API}/login`, { email, password })
      .do((user: User) => this.user = user);
  }

  isLoggedIn(): boolean {
    return !!this.user;
  }

  handleLogin(path?: string) {
    this.router.navigate(['/login', path]);
  }

}
