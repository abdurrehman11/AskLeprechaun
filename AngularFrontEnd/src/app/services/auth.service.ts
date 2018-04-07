import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {

  domain = "http://localhost:8080";
  authToken;
  user;
  options;

  constructor(
    private http: Http
  ) { }

  createAuthenticationHeaders() {
    this.loadToken();
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json',
        'authorization': this.authToken
      })
    });
  }

  loadToken() {
    this.authToken = localStorage.getItem('token');
  }

  registerUser(user) {
    return this.http.post(this.domain + '/authentication/register', user).map(res => res.json());
  }

  checkUsername(username) {
    console.log('auth service checkUsername: ',username);
    return this.http.get(this.domain + '/authentication/checkUsername/' + username).map(res => res.json());
  }

  checkEmail(email) {
    return this.http.get(this.domain + '/authentication/checkEmail/' + email).map(res => res.json());
  }

  login(user) {
    return this.http.post(this.domain + '/authentication/login', user).map(res => res.json());
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  // store user data in browser to keep login
  storeUserData(token, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  getProfile(){
    this.createAuthenticationHeaders();
    return this.http.get(this.domain + '/authentication/profile', this.options).map(res => res.json());
  }

  loggedIn() {
    return tokenNotExpired();
  }

  activateUser(token) {
    return this.http.put(this.domain + '/authentication/activate/' + token, token).map(res => res.json());
  }

  resendActivationLink(user) {
    return this.http.put(this.domain + '/authentication/resend', user).map(res => res.json());
  }

  resetUsername(user) {
    return this.http.post(this.domain + '/authentication/resetUsername', user).map(res => res.json());
  }

  resetPassword(user) {
    return this.http.put(this.domain + '/authentication/resetPassword', user).map(res => res.json());
  }

  checkCredentials(token) {
    return this.http.get(this.domain + '/authentication/resetPassword/' + token).map(res => res.json());
  }

  changePassword(user) {
    return this.http.put(this.domain + '/authentication/savepassword', user).map(res => res.json());
  }

}
