import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Observable } from 'rxjs';
import { Season } from '@shared/interfaces/season.interface';

@Injectable({
  providedIn: 'root',
})
export class SeasonApiService {

  constructor(private http: HttpService) {
  }

  public getSeasonByWorkspace(workspaceId: number): Observable<Season[]> {
    return this.http.get(`/season/${workspaceId}`, {}, {});
  }

  public createSeason(workspaceId: number, body): Observable<Season> {
    return this.http.post(`/season/${workspaceId}`, body, {});
  }

  public deleteSeason(id: number): Observable<boolean> {
    return this.http.delete(`/season/${id}`, {}, {});
  }
}
