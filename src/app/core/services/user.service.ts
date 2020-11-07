import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from '@shared/interfaces/user.interface';
import { CookieService } from 'ngx-cookie-service';
import { CookieEnum } from '@shared/enums/cookie.enum';
import { BackendService } from '@backend/backend.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class UserService {
  public user$: BehaviorSubject<IUser> = new BehaviorSubject(null);
  public userLoading$: BehaviorSubject<boolean> = new BehaviorSubject(null);

  constructor(private cookieService: CookieService,
              private backendService: BackendService) {
    this.setUserState();
  }

  public get user(): IUser {
    return this.user$.value;
  }

  public set user(user: IUser) {
    this.user$.next(user);
    this.userLoading$.next(false);
  }

  public setUserState(): void {
    if (this.userIsAuth) {
      this.userLoading$.next(true);
    }
  }

  public getUser(): Observable<IUser> {
    return this.backendService.user.getUser()
      .pipe(
        tap((user) => {
          this.user = user;
        }),
      );
  }

  public get userIsAuth(): boolean {
    console.log(this.cookieService.check(CookieEnum.Jwt));
    return this.cookieService.check(CookieEnum.Jwt);
  }

  public getToken(): string {
    return this.cookieService.get(CookieEnum.Jwt);
  }
}
