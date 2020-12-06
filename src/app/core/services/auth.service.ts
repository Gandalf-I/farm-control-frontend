import { Injectable } from '@angular/core';
import { BackendService } from '@backend/backend.service';
import { CookieService } from 'ngx-cookie-service';
import { ISignUp } from '@backend/interfaces/sign-up.interface';
import { empty, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { CookieEnum } from '@shared/enums/cookie.enum';
import { UserWitToken } from '@shared/interfaces/user.interface';
import { UserService } from '@core/services/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class AuthService {

  constructor(private backend: BackendService,
              private cookie: CookieService,
              private userService: UserService,
              private router: Router,
              private snackBar: MatSnackBar) { }

  public signUp(payload: ISignUp, check?: boolean): Observable<UserWitToken> {
    return this.backend.auth.signUp(payload)
      .pipe(
        tap((user) => {
          this.cookie.set(CookieEnum.Jwt, user.token);
        }),
        catchError(({ error, title }) =>
          check ? this.signIn(payload) : throwError(error || title),
        ),
        catchError((err) => {
          const errName: string = err || 'Authorization error, try again later!';

          this.snackBar.open(errName, 'Ok', {
            duration: 3000,
          });
          return empty();
        }),
      );
  }

  public signIn(payload: ISignUp, check?: boolean): Observable<UserWitToken> {
    return this.backend.auth.signIn(payload)
      .pipe(
        tap((user) => {
          this.cookie.set(CookieEnum.Jwt, user.token);
          // this.userService.getUser();
        }),
        catchError(({ error, title }) =>
          check ? this.signUp(payload) : throwError(error || title),
        ),
        catchError((err) => {
          const errName: string = err || 'Authorization error, try again later!';

          this.snackBar.open(errName, 'Ok', {
            duration: 3000,
          });

          return empty();
        }),
      );
  }

  public logOut(): void {
    this.userService.user = null;
    this.cookie.delete(CookieEnum.Jwt);
    this.router.navigateByUrl('auth');
  }
}
