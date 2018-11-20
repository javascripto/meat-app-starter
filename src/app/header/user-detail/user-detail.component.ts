import { Component, OnInit } from '@angular/core';
import { User } from '../../security/login/user.model';
import { LoginService } from 'app/security/login/login.service';

@Component({
  selector: 'mt-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  public user(): User {
    return this.loginService.user;
  }

  public isLoggedIn(): boolean {
    return this.loginService.isLoggedIn();
  }

  public login(): void {
    this.loginService.handleLogin();
  }

  public logout(): void {
    this.loginService.logout();
  }
}
