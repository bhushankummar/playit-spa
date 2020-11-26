import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../localStorage.service';

@Injectable()
export class HttpHandleInterceptor implements HttpInterceptor {

  userToken: string;
  constructor(private localstorage: LocalStorageService) {
    this.userToken = this.localstorage.get();
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authReq = req.clone({
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.userToken}`
      })
    });

    return next.handle(authReq);
  }
}
