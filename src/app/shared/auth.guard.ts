import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {
  }
  canActivate(): boolean {
    const auth = this.isAuthenticated();
    if (!auth) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
  isAuthenticated(): boolean {
    const login = this.getLoginUserItems();
    if (!login) {
      return false;
    }
    return true;
  }
  getLoginUserItems() {
    return JSON.parse(localStorage.getItem('login'));
  }
}
