import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CultureApiService {

  constructor(private http: HttpService) { }

  public getCultures(): Observable<any[]> {
    return this.http.get('/culture', {}, {});
  }

  public createCulture(body: any): Observable<any> {
    return this.http.post('/culture', body , {}, {});
  }

  public editCulture(body: any): Observable<any> {
    return this.http.patch('/culture', body , {}, {});
  }

  public deleteCulture(params: any): Observable<any> {
    return this.http.delete('/culture', {}, params);
  }
}
