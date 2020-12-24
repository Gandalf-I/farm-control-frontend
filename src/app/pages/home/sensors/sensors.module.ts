import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SensorsRoutingModule } from './sensors-routing.module';
import { SensorsComponent } from './sensors.component';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [SensorsComponent],
    imports: [
        CommonModule,
        SensorsRoutingModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        ReactiveFormsModule,
        TranslateModule,
    ],
})
export class SensorsModule { }
