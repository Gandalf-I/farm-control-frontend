import { Injectable } from '@angular/core';
// @ts-ignore
import * as L from 'leaflet';
declare let L: any;
import 'leaflet-measure';

@Injectable({
  providedIn: 'root',
})
export class MapService {

  map: L.DrawMap;

  drawnItems: L.FeatureGroup = L.featureGroup();

  options = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Open Street Map' }),
    ],
    zoom: 6,
    center: L.latLng({ lat: 47, lng: 35 }),
    zoomControl: false,
  };

  drawOptions: L.Control.DrawConstructorOptions = {
    position: 'topleft',
    draw: {
      marker: {
        icon: L.icon({
          iconSize: [25, 41],
          iconAnchor: [13, 41],
          iconUrl: 'assets/images/marker.png',
        }),
      },
    },
    edit: {
      featureGroup: this.drawnItems,
    },
  };

  constructor() { }

  startMarker() {
    // new L.Draw.Marker(this.map, this.drawOptions.draw.marker as any).enable();
    new L.Control.Measure().enable();
  }
}
