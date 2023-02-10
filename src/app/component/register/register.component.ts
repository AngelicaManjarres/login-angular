import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/User'
import { UserService } from 'src/app/service/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  protected newUser: User = {
    name: '',
    username: '',
    password: '',
  }
  protected repassword:string = ''
  protected unmatch:boolean = false

  constructor(protected userService: UserService, protected router: Router) { }

  ngOnInit(): void {
  }

  checkMatch() {
    this.newUser.password === this.repassword ? this.unmatch = false : this.unmatch = true
  }

  createUser(user: NgForm){
    console.log(user.value)
    console.log(user.valid)
    console.log(this.unmatch)
    if(!this.unmatch && user.valid){
      this.userService.addUser('http://localhost:3000/users', {name: this.newUser.name, username: this.newUser.username, password: this.newUser.password})
      this.router.navigate(['/'])
    }
  }

}
