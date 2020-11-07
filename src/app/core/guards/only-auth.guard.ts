import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserService } from '@core/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class OnlyAuthGuard implements CanActivate {

  constructor(private userService: UserService, public router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.userService.userIsAuth) {
      return this.userService.getUser()
        .pipe(
          catchError(() => {
            this.userService.user = null;
            return of(true);
          }),
          map(() => true),
        );
    }

    return this.router.navigate(['auth']); 
  }

}
