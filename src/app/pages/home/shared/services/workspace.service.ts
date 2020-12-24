import { Injectable } from '@angular/core';
import { BackendService } from '@backend/backend.service';
import { BehaviorSubject } from 'rxjs';
import { Workspace } from '@shared/interfaces/workspace.interface';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class WorkspaceService {

  workspace = new BehaviorSubject<Workspace>(null);
  workspaceId: number;

  constructor(private backendService: BackendService, private activatedRoute: ActivatedRoute) {
  }

  setWorkspace(id: number) {
    this.workspaceId = id;
    this.backendService.workspace.getWorkspaceById(id)
      .subscribe(value => this.workspace.next(value));
  }
}
