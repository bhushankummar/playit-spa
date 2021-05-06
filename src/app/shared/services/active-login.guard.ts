import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../services/auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class ActiveLoginGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {
  }
  canActivate() {
    const auth = this.authService.isAuthenticated();
    if (auth) {
      this.router.navigate(['show-playlist']);
      return false;
    }
    return true;
  }

}
