import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  login(data) {
    return this.http.put(environment.apiUrl + '/api/v1/user/login', data);
  }

  register(data) {
    return this.http.get(environment.apiUrl + '/api/v1/user/register', data);
  }
}
