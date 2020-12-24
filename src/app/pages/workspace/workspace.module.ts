import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspaceRoutingModule } from './workspace-routing.module';
import { WorkspaceComponent } from './workspace.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { WorkspaceCardComponent } from './shared/components/workspace-card/workspace-card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {ComponentsModule} from '@shared/components/components.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [WorkspaceComponent, WorkspaceCardComponent],
  imports: [
    CommonModule,
    WorkspaceRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    ComponentsModule,
    TranslateModule,
  ],
})
export class WorkspaceModule { }
