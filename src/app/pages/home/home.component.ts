import { Component, ChangeDetectionStrategy, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
// @ts-ignore
import * as L from 'leaflet';
import { AuthService } from '@core/services/auth.service';

declare let L: any;
import 'leaflet-measure';
import { ActivatedRoute } from '@angular/router';
import { WorkspaceService } from '@pages/home/shared/services/workspace.service';
import { MapService } from '@pages/home/shared/services/map.service';
import { BackendService } from '@backend/backend.service';
import { NotesService } from '@pages/home/notes/notes.service';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements AfterViewInit {
  map: L.DrawMap;

  constructor(public authService: AuthService,
              private route: ActivatedRoute,
              private workspaceService: WorkspaceService,
              private mapService: MapService,
              private backendService: BackendService,
              private notesService: NotesService) {
    workspaceService.setWorkspace(this.route.snapshot.params.id);
  }

  drawnItems: L.FeatureGroup = this.mapService.drawnItems;
  options = this.mapService.options;

  drawOptions = this.mapService.drawOptions;

  ngAfterViewInit() {
    this.map.on('measurefinish', (e) => this.fieldCreate(e));
  }

  private fieldCreate(e) {
    if (e.area === 0) {
      return;
    }

    this.backendService.field.createField(
      { area: e.area, points: e.points.map((point) => JSON.stringify(point)) },
    )
      .subscribe((value) => {
        this.mapService.fields.next([...this.mapService.fields.value, value]);
      });
  }

  public onDrawCreated(e: any) {
    const type = e.layerType;
    const layer = e.layer;
    if (type === 'marker') {
      const { lat, lng } = layer._latlng;

      if (this.mapService.isSensorMarker) {
        this.backendService.sensor.createSensor(this.workspaceService.workspaceId,
          { ...this.mapService.sensorForm.value, lat, lng },
        )
          .subscribe((value) => {
            this.mapService.sensors.next([...this.mapService.sensors.value, value]);
          });
        L.marker([lat, lng], { ...this.mapService.sensorIcon }).addTo(this.mapService.markerLayer);
        this.mapService.isSensorMarker = false;
      } else {
        this.backendService.note.createNote(this.workspaceService.workspaceId,
          { ...this.notesService.noteForm, lat, lng },
        )
          .subscribe((value) => {
            this.mapService.notes.next([...this.mapService.notes.value, value]);
          });
        L.marker([lat, lng], { ...this.mapService.drawOptions.draw.marker }).addTo(this.mapService.markerLayer).bindPopup(this.notesService.noteForm.comment);
      }
    }
  }

  public onDrawStart(e: any) {
  }

  onDrawStop($event: L.DrawEvents.DrawStop) {
    console.log($event.layer);
  }

  onMapReady(map: L.DrawMap) {
    this.map = map;
    this.mapService.map = map;
    setTimeout(() => {
      map.invalidateSize();
      L.control.zoom({
        position: 'bottomright',
      }).addTo(map);

      const measureControl = new L.Control.Measure(
        {
          position: 'topright',
          primaryLengthUnit: 'meters',
          secondaryLengthUnit: 'kilometers',
          primaryAreaUnit: 'hectares',
          activeColor: '#5b82ca',
          completedColor: '#1046d2',
          popupOptions: {
            className: 'leaflet-measure-resultpopup',
          },
        },
      );
      measureControl.addTo(map);
      this.map.addLayer(this.mapService.markerLayer);
      this.map.addLayer(this.mapService.polygonLayer);

      setTimeout(() => {
        this.mapService.addNotesInMap();
        this.mapService.addFieldInMap();
        this.mapService.addSensorsInMap();
      }, 1000);

    }, 0);
  }

  drawMark($event: L.LeafletEvent) {
    console.log($event);
  }

}
