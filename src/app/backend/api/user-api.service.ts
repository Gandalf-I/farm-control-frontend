import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '@shared/interfaces/user.interface';
import { HttpService } from '@core/services/http.service';
import { HttpRequestsEnum } from '@shared/enums/http-requests.enum';

@Injectable()
export class UserApiService {

  constructor(private http: HttpService) {
  }

  public getUser(): Observable<IUser> {
    return this.http.get(HttpRequestsEnum.Get_User);
  }

  public profileUpdate(query: object): Observable<{ token }> {
    return this.http.post(HttpRequestsEnum.Post_Profile_Update, {}, {}, query);
  }
}
