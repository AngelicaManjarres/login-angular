import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  protected user: any = {
    username: '',
    password: ''
  }

  constructor(protected userService: UserService, public router: Router) { }

  ngOnInit(): void {

  }

  login() {
    if(this.user.username != '' || this.user.password != '') {
      let res = this.userService.auth('http://localhost:3000/users')
      res.subscribe((res:any) => {
        let loggedIn = res.filter((res:any) => res.user.username == this.user.username && res.user.password == this.user.password)
        if(loggedIn.length > 0) {
          localStorage.setItem('user', JSON.stringify(loggedIn[0]))
          this.router.navigate(['/home'])
        } else {
          console.log('user not found')
        }
      })
      
    } else {
      console.log('not send')
    }
  }

}
