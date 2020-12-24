import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Observable } from 'rxjs';
import { Culture } from '@shared/interfaces/culture';

@Injectable({
  providedIn: 'root',
})
export class CultureApiService {

  constructor(private http: HttpService) { }

  public getCultures(): Observable<Culture[]> {
    return this.http.get('/culture', {}, {});
  }

  public createCulture(body: any): Observable<Culture> {
    return this.http.post('/culture', body , {}, {});
  }

  public editCulture(body: any): Observable<Culture> {
    return this.http.patch('/culture', body , {}, {});
  }

  public deleteCulture(params: any): Observable<Culture> {
    return this.http.delete('/culture', {}, params);
  }
}
