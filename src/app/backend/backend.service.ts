import { Injectable } from '@angular/core';
import { UserApiService } from '@backend/api/user-api.service';
import { AuthService } from '@backend/api/auth.service';
import { FiledApiService } from '@backend/api/filed-api.service';
import { MeasurementApiService } from '@backend/api/measurement-api.service';
import { NoteApiService } from '@backend/api/note-api.service';
import { SeasonApiService } from '@backend/api/season-api.service';
import { SensorApiService } from '@backend/api/sensor-api.service';
import { WorkspaceApiService } from '@backend/api/workspace-api.service';

@Injectable()
export class BackendService {

  constructor(public readonly user: UserApiService,
              public readonly auth: AuthService,
              public readonly field: FiledApiService,
              public readonly measurement: MeasurementApiService,
              public readonly note: NoteApiService,
              public readonly season: SeasonApiService,
              public readonly sensor: SensorApiService,
              public readonly workspace: WorkspaceApiService,
  ) { }
}
