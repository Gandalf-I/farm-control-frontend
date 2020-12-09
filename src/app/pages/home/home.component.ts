import { Component, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
// @ts-ignore
import * as L from 'leaflet';
import { AuthService } from '@core/services/auth.service';

declare let L: any;
import 'leaflet-measure';
import { ActivatedRoute } from '@angular/router';
import { WorkspaceService } from '@pages/home/shared/services/workspace.service';
import { MapService } from '@pages/home/shared/services/map.service';

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
              private mapService: MapService) {
    workspaceService.setWorkspace(this.route.snapshot.params.id);
  }

  drawnItems: L.FeatureGroup = this.mapService.drawnItems;
  options = this.mapService.options;

  drawOptions = this.mapService.drawOptions;

  ngAfterViewInit() {
  }

  public onDrawCreated(e: any) {
    const type = e.layerType;
    const layer = e.layer;
    if (type === 'marker') {
      console.log(layer._latlng);
    } else if (type === 'polygon') {
      console.log(layer._latlngs);
    }
    console.log(layer);
    this.map.addLayer(layer);
  }

  public onDrawStart(e: any) {
    console.log(23412314);
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
        },
      );
      measureControl.addTo(map);
    }, 0);
  }

  drawMark($event: L.LeafletEvent) {
    console.log($event);
  }

}
