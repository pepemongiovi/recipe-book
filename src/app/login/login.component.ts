import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from '../core/services/auth.service';
import {RouterService} from '../core/services/router.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;
  emailRegex = /^[\w\W]{1,}@[\w\W]{2,}$/;
  public _siteKey = '6LdYnVQUAAAAADXbOr4O-EzbldJe1HgKYQYIysDt';

  constructor(private _formBuilder: FormBuilder,
              private _authService: AuthService,
              private routerSerivce: RouterService) {
    this.createForm();
  }

  ngOnInit() {
    this.getLocalStorage();
  }

  createForm() {
    this.userForm = this._formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(this.emailRegex)]],
      password: [null, [Validators.required]],
      captcha: [null, [Validators.required]],
      remember: []
    });
  }

  onSubmit() {
    if (this.userForm.value.remember) {
      this.setLocalStorage(this.userForm.value.email);
    }

    this._authService.login(this.userForm.value.email, this.userForm.value.password)
    .subscribe(res => {
      console.log("WOOOWW");
      this._authService.setSession(res['data']);
      this.routerSerivce.goToRecipes();
      }, err => {
       console.log(err);
      });
  }

  setLocalStorage(email: string) {
    localStorage.setItem('user', JSON.stringify(this.userForm.value));
  }

  getLocalStorage() {
   const info = JSON.parse(localStorage.getItem('user'));

   if (info) {
     this.userForm.patchValue(info);
   }
  }
}
