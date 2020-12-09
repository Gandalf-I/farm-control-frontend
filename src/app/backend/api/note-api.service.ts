import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Observable } from 'rxjs';
import { Note } from '@shared/interfaces/note.interface';

@Injectable({
  providedIn: 'root',
})
export class NoteApiService {

  constructor(private http: HttpService) { }

  public getNoteByWorkspace(workspaceId: number): Observable<Note[]> {
    return this.http.get(`/note/${workspaceId}`, {}, {});
  }

  public createNote(workspaceId: number, body): Observable<Note> {
    return this.http.post(`/note/${workspaceId}`, body, {});
  }

  public deleteNote(id: number): Observable<boolean> {
    return this.http.delete(`/note/${id}`, {}, {});
  }
}
