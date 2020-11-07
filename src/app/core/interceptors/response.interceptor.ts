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

@Injectable()
export class HttpResponseInterceptor implements HttpInterceptor {

  constructor(public loaderService: LoaderService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(
      tap(
        (data) => {
          if (data instanceof HttpResponse) {
            this.loaderService.stopLoading();
            this.loaderService.autoLoading = true;
          }
        },
        () => {
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
