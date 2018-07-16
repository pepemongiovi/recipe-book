import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {environment} from '../../../environments/environment';
import User from '../models/user.model';

@Injectable()
export class UserService {

  private apiUserUrl: string;
  private selectedUser: User;

  constructor(private _http: HttpClient) {
    this.setUserUrl();
  }

  signUp(user: User) {
    const body = {
      name: user.name,
      email: user.email,
      password: user.password
    };
    console.log(this.apiUserUrl);
    return this._http.post(this.apiUserUrl, body);
  }

  getUsersList() {
    return this._http.get(this.apiUserUrl);
  }

  getSelectedUser() {
    return this.selectedUser;
  }

  deleteUser(id) {
    return this._http.delete(this.apiUserUrl + '/' + id);
  }

  getUserByOptions(optionUrl: string) {
    this.apiUserUrl = optionUrl;
    const result = this.getUsersList();
    this.setUserUrl();
    return result;
  }

  setSelectedProject(user: User) {
    this.selectedUser = user;
  }

  private setUserUrl() {
    this.apiUserUrl = `${environment.apiUrl}/user`;
  }
}
