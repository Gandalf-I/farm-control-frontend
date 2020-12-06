import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { LoaderService } from '@core/services/loader.service';
import { UserService } from '@core/services/user.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(private userService: UserService,
              public loaderService: LoaderService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.startLoading();
    if (this.userService.userIsAuth) {
      const token: string = this.userService.getToken();
      return next.handle(req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      }));
    }

    return next.handle(req);
  }
}
