import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Observable } from 'rxjs';
import { Workspace } from '@shared/interfaces/workspace.interface';

@Injectable({
  providedIn: 'root',
})
export class WorkspaceApiService {

  constructor(private http: HttpService) { }

  public getWorkspaceByUserCreated(): Observable<Workspace[]> {
    return this.http.get('/workspace/user/creator', {}, {});
  }

  public getWorkspaceByUserAccess(): Observable<Workspace[]> {
    return this.http.get('/workspace/user/access', {}, {});
  }

  public getWorkspaceById(id: number): Observable<Workspace> {
    return this.http.get(`/workspace/${id}`, {}, { });
  }

  public createWorkspace(body): Observable<Workspace> {
    return this.http.post('/workspace', body, {}, {});
  }

  public editWorkspace(body): Observable<Workspace> {
    return this.http.patch('/workspace', body, {}, {});
  }

  public deleteWorkspace(id): Observable<boolean> {
    return this.http.delete('/workspace', {}, { id });
  }
}
