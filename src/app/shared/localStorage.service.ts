import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {}
  set(value) {
    return window.localStorage.setItem('token', value);
  }
  get() {
    return window.localStorage.getItem('token');
  }
  delete(key) {
    return window.localStorage.removeItem(key);
  }
}
