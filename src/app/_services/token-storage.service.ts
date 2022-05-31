import { Injectable } from '@angular/core';
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }
  signOut(): void {
    localStorage.clear();
  }
  firstname:string='';
  lastname:string='';
  isAdmin!:boolean;
  public saveToken(token: string): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);
  }
  public getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }
  public saveUser(user: any): void {
    localStorage.removeItem(USER_KEY);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  public getUser(): any {
    const user = localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }
  getUserName():string{
   let fname=localStorage.getItem('first_name');
   let lname=localStorage.getItem('last_name');
   if(fname && lname){
     return fname+' '+lname;
   }
   return '';
  }
  storeTokenDetails(token:any){
    this.firstname = (JSON.parse(atob(token.split('.')[1]))).firstname;
    localStorage.setItem('first_name',this.firstname);
    this.lastname=(JSON.parse(atob(token.split('.')[1]))).lastname;
    localStorage.setItem('last_name',this.lastname);
    this.isAdmin=(JSON.parse(atob(token.split('.')[1]))).isAdmin;
    localStorage.setItem('isAdmin',this.isAdmin?'true':'false');

  }
  isTokenExpired(token:any) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;

  }
}