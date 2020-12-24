import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MapService } from '@pages/home/shared/services/map.service';
import { Sensor } from '@shared/interfaces/sensor';
import { FormBuilder, Validators } from '@angular/forms';
import { BackendService } from '@backend/backend.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '@pages/home/shared/components/modal/modal.component';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SensorsComponent implements OnInit {

  constructor(public mapService: MapService,
              private fb: FormBuilder,
              private backendService:BackendService,
              public dialog: MatDialog,
              ) { }

  ngOnInit(): void {
    this.initNoteForm();
  }

  private initNoteForm(): void {
    this.mapService.sensorForm = this.fb.group({
      name: ['', [Validators.required, Validators.min(3)]],
    });
  }

  createSensor() {
    if (this.mapService.sensorForm.invalid) {
      return;
    }
    this.mapService.isSensorMarker = true;
    this.mapService.startMarker();
  }

  goToSensor(sensor: Sensor) {
    this.mapService.map.flyTo({ ...sensor });
    this.dialog.open(ModalComponent, {
      data: { sensor },
    });
  }

  deleteNote(note: Sensor) {
    this.backendService.sensor.deleteSensor(note.id).subscribe(() => {
      this.mapService.sensors.next(this.mapService.sensors.value.filter(value => value.id !== note.id));
      this.mapService.updateMarkerLayers();
    });
  }

}
