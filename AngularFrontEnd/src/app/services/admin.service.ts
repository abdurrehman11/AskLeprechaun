import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
import { AuthService } from './auth.service';

@Injectable()
export class AdminService {

  domain = "http://localhost:8080";
  authToken;

  constructor(
    private http: Http,
    private authService: AuthService
  ) { }

  login(user) {
    return this.http.post(this.domain + '/admin/login', user).map(res => res.json());
  }

  // function to get all users from database
  getAllUsers() {
    return this.http.get(this.domain + '/admin/allUsers').map(res => res.json());
  }

  // block user
  blockUser(id) {
    this.authService.createAuthenticationHeaders();
    return this.http.put(this.domain + '/admin/block/' + id, this.authService.options).map(res => res.json());
  }

  // unblock user
  unblockUser(id) {
    this.authService.createAuthenticationHeaders();
    return this.http.put(this.domain + '/admin/unblock/' + id, this.authService.options).map(res => res.json());
  }

  // delete user
  deleteUser(id) {
    this.authService.createAuthenticationHeaders();
    return this.http.delete(this.domain + '/admin/deleteuser/' + id, this.authService.options).map(res => res.json());
  }

}
