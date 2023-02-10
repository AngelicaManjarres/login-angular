import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../interfaces/User';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient, private router: Router) { }

  addUser(url: string, user: User){
    this.http.post(url, {user}).subscribe((res:any) => console.log('Data sent'))
  }

  auth(url: string) {
    return this.http.get(url)

  }

  isLoggedIn() {
    let token = localStorage.getItem('user')
    return token != null ? true : false
  }

  logout() {
    localStorage.removeItem('user')
    console.log('User logged out')
    this.router.navigate(['/'])
  }

}
