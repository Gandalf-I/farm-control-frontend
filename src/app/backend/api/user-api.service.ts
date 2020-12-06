import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@shared/interfaces/user.interface';
import { HttpService } from '@core/services/http.service';

@Injectable()
export class UserApiService {

  constructor(private http: HttpService) {
  }

  public getUser(): Observable<User> {
    return this.http.get('/user', {}, {});
  }

  public getUsersByLogin(login): Observable<User[]> {
    return this.http.get('/user/login', {}, { login });
  }

}
