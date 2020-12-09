import { Injectable } from '@angular/core';
import { BackendService } from '@backend/backend.service';
import {BehaviorSubject} from 'rxjs';
import {Workspace} from '@shared/interfaces/workspace.interface';

@Injectable({
  providedIn: 'root',
})
export class WorkspaceService {

  workspace = new BehaviorSubject<Workspace>(null);

  constructor(private backendService: BackendService) {
  }

  setWorkspace(id: number) {
    this.backendService.workspace.getWorkspaceById(id)
      .subscribe(value => this.workspace.next(value));
  }
}
