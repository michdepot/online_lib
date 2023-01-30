import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ApiInterceptorService implements HttpInterceptor{

  constructor(private token:TokenService) { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.token.isValid()){
        req = req.clone({
          setHeaders: {
            'Content-Type':  'application/json',
            'Authorization': `Bearer ${this.token.get()}`
          }
        });
    }
    return next.handle(req);
  }
  
}
