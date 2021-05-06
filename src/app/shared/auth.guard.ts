import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../shared/services/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {
  }
  canActivate(): boolean {
    const auth = this.authService.isAuthenticated();
    if (!auth) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
