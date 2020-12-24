import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Observable } from 'rxjs';
import { Sensor } from '@shared/interfaces/sensor';

@Injectable({
  providedIn: 'root',
})
export class SensorApiService {

  constructor(private http: HttpService) { }

  public getSensorByWorkspace(workspaceId: number): Observable<Sensor[]> {
    return this.http.get(`/sensor/${workspaceId}`, {}, {});
  }

  public createSensor(workspaceId: number, body): Observable<Sensor> {
    return this.http.post(`/sensor/${workspaceId}`, body, {});
  }

  public sendDataSensor(workspaceId: number, body): Observable<Sensor> {
    return this.http.post(`/measurement/${workspaceId}/load`, body, {});
  }

  public deleteSensor(id: number): Observable<boolean> {
    return this.http.delete(`/sensor/${id}`, {}, {});
  }
}
