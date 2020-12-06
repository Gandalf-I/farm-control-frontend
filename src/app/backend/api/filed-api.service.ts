import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FiledApiService {

  constructor(private http: HttpService) { }

  public getFields(): Observable<any[]> {
    return this.http.get('/field', {}, {});
  }

  public getFieldById(id: any): Observable<any[]> {
    return this.http.get('/field', {}, { id });
  }

  public createField(body: any): Observable<any> {
    return this.http.post('/field', body , {}, {});
  }

  public editField(body: any): Observable<any> {
    return this.http.patch('/culture', body , {}, {});
  }

  public deleteField(params: any): Observable<any> {
    return this.http.delete('/culture', {}, params);
  }
}
