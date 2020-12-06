import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Observable } from 'rxjs';
import { Workspace } from '@shared/interfaces/workspace.interface';

@Injectable({
  providedIn: 'root',
})
export class WorkspaceApiService {

  constructor(private http: HttpService) { }

  public getWorkspaceByUserCreated(id): Observable<Workspace[]> {
    return this.http.get('/workspace/creator', {}, { id });
  }

  public getWorkspaceByUserAccess(id): Observable<Workspace[]> {
    return this.http.get('/workspace/access', {}, { id });
  }

  public getWorkspaceById(id: number): Observable<Workspace> {
    return this.http.get('/workspace', {}, { id });
  }

  public createWorkspace(body): Observable<Workspace> {
    return this.http.post('/workspace', body, {}, {});
  }

  public editWorkspace(body): Observable<Workspace> {
    return this.http.patch('/workspace', body, {}, {});
  }

  public deleteWorkspace(id): Observable<Workspace> {
    return this.http.delete('/workspace', {}, { id });
  }
}
