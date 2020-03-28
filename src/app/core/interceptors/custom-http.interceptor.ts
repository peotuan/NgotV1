import {
  HttpErrorResponse,
  HttpHandler,
  HttpHeaderResponse,
  HttpInterceptor,
  HttpProgressEvent,
  HttpRequest,
  HttpResponse,
  HttpSentEvent,
  HttpUserEvent
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthService } from '@pg-app/core/services/auth.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
  constructor(
    // private auth: AuthService, private router: Router, private toastrService: ToastrService
    ) { }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err && err.status === 401) {
          // this.router.navigate(['/auth', 'login']);
          // this.toastrService.error('You are not authorized or your token has expired.');
          return of(null);
        }

        throw err;
      })
    );
  }
}
