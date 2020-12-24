import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Observable } from 'rxjs';
import { Field } from '@shared/interfaces/field';

@Injectable({
  providedIn: 'root',
})
export class FiledApiService {

  constructor(private http: HttpService) { }

  public getFields(): Observable<Field[]> {
    return this.http.get('/field', {}, {});
  }

  public getFieldsById(id: any): Observable<Field[]> {
    return this.http.get(`/field/${id}`, {}, {});
  }

  public createField(body: any): Observable<Field> {
    return this.http.post('/field', body, {}, {});
  }

  public editField(body: any): Observable<Field> {
    return this.http.patch('/field', body , {}, {});
  }

  public deleteField(id: any): Observable<Field> {
    return this.http.delete(`/field/${id}`, {});
  }
}
