import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private loginService: LoginService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email:    this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required])
    });
  }

  login() {
    this.loginService.login(this.loginForm.value)
      .subscribe(console.log);
  }
}
