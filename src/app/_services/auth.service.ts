import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from '../user';
//const AUTH_API = 'https://reqres.in/api/login';
const AUTH_API ='https://dev-api.tqmi.io/user-management/login'
const USER_API='https://reqres.in/api/users?page=2';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  arrUsers:user[]=[];
  constructor(private http: HttpClient) { }
  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API, {
      "username":username,
      "password":password
    }, httpOptions);
  }
  getUsers():Observable<any>{
    return this.http.get(USER_API)
  }
  // register(username: string, email: string, password: string): Observable<any> {
  //   return this.http.post(AUTH_API + 'signup', {
  //     username,
  //     email,
  //     password
  //   }, httpOptions);
  // }
}