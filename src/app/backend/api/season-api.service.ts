import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';

@Injectable({
  providedIn: 'root',
})
export class SeasonApiService {

  constructor(private http: HttpService) { }
}
