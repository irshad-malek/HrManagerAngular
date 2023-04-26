import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { ServicesService } from '../Services/services.service';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {

  constructor(private authService: ServicesService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    debugger
    const accessToken = localStorage.getItem('access_token');

    if (accessToken) {
      const authRequest = request.clone({
        headers: request.headers.set('Authorization', ` ${accessToken}`),
      });
      return next.handle(authRequest);
    }

    return next.handle(request);
  }
}
