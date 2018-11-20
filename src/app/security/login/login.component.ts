import { User } from './user.model';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'app/shared/messages/notification.service';
@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  public navigateTo: string;
  public loginForm: FormGroup;

  constructor(private router: Router,
              private fb: FormBuilder,
              private loginService: LoginService,
              private activatedRoute: ActivatedRoute,
              private notificationS: NotificationService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email:    this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required])
    });
    this.navigateTo = this.activatedRoute.snapshot.params['to'] || '/';
  }

  login() {
    this.loginService.login(this.loginForm.value)
      .subscribe(
        (user: User) =>
          this.notificationS.notify(`Bem vindo(a) ${user.name}`),
        (response: HttpErrorResponse) =>
          this.notificationS.notify(response.error.message),
        () => this.router.navigate([this.navigateTo]));
  }
}
