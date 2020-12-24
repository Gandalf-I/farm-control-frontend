import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '@shared/shared.module';
import { ComponentsModule } from '@shared/components/components.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LeafletDrawModule } from '@asymmetrik/ngx-leaflet-draw';
import { ModalComponent } from './shared/components/modal/modal.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [HomeComponent, ModalComponent],
    imports: [
        CommonModule,
        HomeRoutingModule,
        MatSidenavModule,
        MatButtonModule,
        SharedModule,
        ComponentsModule,
        LeafletModule,
        LeafletDrawModule,
        MatFormFieldModule,
        MatDialogModule,
        TranslateModule,
    ],
})
export class HomeModule { }
