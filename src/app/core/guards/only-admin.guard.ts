import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { UserService } from '@core/services/user.service';
import { UserTypeEnum } from '@shared/interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class OnlyAdminGuard implements CanActivate {

  constructor(private userService: UserService, public router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.userService.userIsAuth) {
      return this.userService.getUser()
        .pipe(
          map(user => user.type === UserTypeEnum.Admin),
          catchError(() => {
            this.userService.user = null;
            return of(false);
          }),
          tap((value) => {
            if (!value) {
              this.router.navigate(['/workspaces']);
            }
          }),
        );
    }

    return this.router.navigate(['/workspaces']);
  }

}
