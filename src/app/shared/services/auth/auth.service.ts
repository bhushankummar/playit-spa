import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  login() {
    return this.http.get(environment.apiUrl + '/api/v1/user/login');
  }

  register(data) {
    return this.http.get(environment.apiUrl + '/api/v1/user/register', data);
  }

  getToken() {
    return localStorage.getItem('token');
  }
  isAuthenticated(): boolean {
    const login = this.getToken();
    if (!login) {
      return false;
    }
    return true;
  }
}
