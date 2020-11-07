import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Observable } from 'rxjs';
import { HttpRequestsEnum } from '@shared/enums/http-requests.enum';
import { ISignUp } from '@backend/interfaces/sign-up.interface';
import { ISignIn } from '@backend/interfaces/sign-in.interface';
import { IUserWitToken } from '@shared/interfaces/user.interface';

@Injectable()
export class AuthService {

  constructor(private http: HttpService) { }

  public signUp(payload: ISignUp): Observable<IUserWitToken> {
    return this.http.post(HttpRequestsEnum.Post_Sign_Up, payload);
  }

  public signIn(payload: ISignIn): Observable<IUserWitToken> {
    console.log(payload);
    return this.http.post(HttpRequestsEnum.Post_Sign_In, payload);
  }
}
