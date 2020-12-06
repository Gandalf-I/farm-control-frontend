import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';

@Injectable({
  providedIn: 'root',
})
export class SensorApiService {

  constructor(private http: HttpService) { }
}
