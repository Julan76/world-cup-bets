import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { MyConstants } from '../../../constants';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class HttpInterceptorService implements  HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const apiReq = req.clone({ headers: req.headers.set('X-Auth-Token', MyConstants.API_TOKEN)});
    return next.handle(apiReq);
  }  constructor() { }

}
