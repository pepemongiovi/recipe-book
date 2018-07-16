import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from '../../../environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private apiUserUrl: string;
  private TOKEN = 'token';

  constructor(private _http: HttpClient, private _router: Router) {
    this.apiUserUrl = `${environment.apiUrl}/login`;
  }

  login(email, password) {
    const body = {
      email: email,
      password: password
    };
    return this._http.post(this.apiUserUrl, body);
  }

  setSession(authData: any) {
    localStorage.setItem(this.TOKEN, JSON.stringify(authData['token']));
  }

  getToken() {
    return JSON.parse(localStorage.getItem(this.TOKEN));
  }

  isAuthenticated() {
    const token = localStorage.getItem(this.TOKEN);

    return token ? true : false;
  }

  revokeSession() {
    localStorage.removeItem(this.TOKEN);
  }

  logout() {
    this.revokeSession();
    this._router.navigateByUrl('login');
  }

}
