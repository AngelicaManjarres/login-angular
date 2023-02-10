import { getLocaleMonthNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user!: any

  constructor(private userService: UserService) { 
    this.getToken()
    
  }

  ngOnInit(): void {
    
  }

  getToken() {
    let local = localStorage.getItem('user')
    if (local == null) {
      console.log("There's no user yet")
    } else {
      let res = JSON.parse(local)
      this.user = res.user
    }
  }

  logout() {
    this.userService.logout()

  }

}
