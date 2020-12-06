import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserApiService } from '@backend/api/user-api.service';
import { AuthService } from '@backend/api/auth.service';
import { CultureApiService } from '@backend/api/culture-api.service';
import { FiledApiService } from '@backend/api/filed-api.service';
import { MeasurementApiService } from '@backend/api/measurement-api.service';
import { NoteApiService } from '@backend/api/note-api.service';
import { SeasonApiService } from '@backend/api/season-api.service';
import { SensorApiService } from '@backend/api/sensor-api.service';
import { WorkspaceApiService } from '@backend/api/workspace-api.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    UserApiService,
    AuthService,
    CultureApiService,
    FiledApiService,
    MeasurementApiService,
    NoteApiService,
    SeasonApiService,
    SensorApiService,
    WorkspaceApiService,
  ],
})
export class ApiModule { }
