import { Injectable } from '@angular/core';
import { UserService } from '../service/user.service';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      console.log('CanActivate')
      let isLoggedIn = this.userService.isLoggedIn()
      if(isLoggedIn) {
        return true
      } else {
        this.router.navigate(['/'])
        return false
      }
  }
  
}
