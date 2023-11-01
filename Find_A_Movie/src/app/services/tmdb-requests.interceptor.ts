import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { env } from 'enviroment/env';

@Injectable()
export class TMDbRequestsInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    const newRequest = request.clone({headers: new HttpHeaders({Authorization: `Bearer ${env.apiToken}`, accept: 'application/json'})});
    
    return next.handle(newRequest);
  }
}
