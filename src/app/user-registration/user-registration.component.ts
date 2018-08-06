import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {UserService} from '../core/services/user.service';
import {PasswordValidation} from '../shared/password-validation';
import {RouterService} from '../core/services/router.service';
import {User} from '../core/models/user.model';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  emailRegex = /^[\w\W]{1,}@[\w\W]{2,}$/;
  form: FormGroup;

  constructor(private _formBuilder: FormBuilder,
    private _userService: UserService,
    private routerService: RouterService) {
      this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.form = this._formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
      password: ['', [Validators.required, Validators.min(8)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validator: PasswordValidation.MatchPassword
    });
  }

  resetForm() {
    this.form.reset({
      name: '',
      email: '',
      password: ''
    });
  }

  onSubmit() {
    const user = new User(
      this.form.value.name,
      this.form.value.email,
      this.form.value.password
    );
    console.log(user);
    this._userService.createUser(user)
      .subscribe(
        data => {
          this.routerService.goToLogin();
        }, err => {
          console.error(err);
        }
      )
    this.resetForm();
  }
}
