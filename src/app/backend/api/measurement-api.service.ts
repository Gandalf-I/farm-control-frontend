import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Observable } from 'rxjs';
import { Measurement } from '@shared/interfaces/measurement';

@Injectable({
  providedIn: 'root',
})
export class MeasurementApiService {

  constructor(private http: HttpService) { }

  public getMeasurementsByWorkspace(): Observable<Measurement[]> {
    return this.http.get(`/measurement`, {}, {});
  }

  public createMeasurement(workspaceId: number, body): Observable<Measurement> {
    return this.http.post(`/measurement/${workspaceId}`, body, {});
  }

  private loadMeasurements(workspaceId: number, body): Observable<Measurement> {
    return this.http.post(`/measurement/${workspaceId}`, body, {});
  }

  public deleteMeasurement(id: number): Observable<boolean> {
    return this.http.delete(`/measurement/${id}`, {}, {});
  }
}
