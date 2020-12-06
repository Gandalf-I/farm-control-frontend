import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';

@Injectable({
  providedIn: 'root',
})
export class NoteApiService {

  constructor(private http: HttpService) { }
}
