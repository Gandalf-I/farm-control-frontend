import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoaderService } from '@core/services/loader.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@core/services/user.service';

@Injectable()
export class HttpResponseInterceptor implements HttpInterceptor {

  constructor(public loaderService: LoaderService, private router: Router, private userService: UserService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(
      tap(
        (data) => {
          if (data instanceof HttpResponse) {
            this.loaderService.stopLoading();
            this.loaderService.autoLoading = true;
          }
        },
        (error) => {
          if (error.status === 401) {
            this.userService.deleteToken();
            this.router.navigate(['auth']);
          }
          this.loaderService.stopLoading();
          this.loaderService.autoLoading = true;
        },
        () => {
          this.loaderService.stopLoading();
          this.loaderService.autoLoading = true;
        },
      ),
    );
  }
}
