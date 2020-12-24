import { Injectable } from '@angular/core';
// @ts-ignore
import * as L from 'leaflet';
declare let L: any;
import 'leaflet-measure';
import { Note } from '@shared/interfaces/note.interface';
import { BehaviorSubject } from 'rxjs';
import { BackendService } from '@backend/backend.service';
import { WorkspaceService } from '@pages/home/shared/services/workspace.service';
import { Field } from '@shared/interfaces/field';
import { Sensor } from '@shared/interfaces/sensor';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class MapService {

  map: L.DrawMap;
  markerLayer = L.layerGroup();
  polygonLayer = L.layerGroup();
  notes = new BehaviorSubject<Note[]>([]);
  fields = new BehaviorSubject<Field[]>([]);
  sensors = new BehaviorSubject<Sensor[]>([]);

  isSensorMarker = false;

  drawnItems: L.FeatureGroup = L.featureGroup();
  sensorForm: FormGroup;
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

  sensorIcon = {
    icon: L.icon({
      iconSize: [25, 25],
      iconUrl: 'assets/images/sensor-marker.png',
    }),
  };

  constructor(private backendService: BackendService, private workspaceService: WorkspaceService) {
    setTimeout(() => {
      this.getNotes();
      this.getFields();
      this.getSensors();
    });
  }

  addNotesInMap() {
    for (const note of this.notes.value) {
      L.marker([note.lat, note.lng], { ...this.drawOptions.draw.marker }).addTo(this.markerLayer).bindPopup(note.comment);
    }
  }

  addSensorsInMap() {
    for (const sensor of this.sensors.value) {
      L.marker([sensor.lat, sensor.lng], { ...this.sensorIcon }).addTo(this.markerLayer);
    }
  }

  addFieldInMap() {
    for (const field of this.fields.value) {
      const points = [];
      for (const point of field.points) {
        const { lat, lng } = JSON.parse(point);
        points.push([lat, lng]);
      }
      L.polygon(points, { color: '#1046d2' }).addTo(this.polygonLayer);
    }
  }

  startMarker(type?: string) {
    if (type === 'note') {
      new L.Draw.Marker(this.map, this.drawOptions.draw.marker as any).enable();
    } else {
      new L.Draw.Marker(this.map, this.sensorIcon as any).enable();
    }
  }

  updateMarkerLayers() {
    this.markerLayer.clearLayers();
    this.addNotesInMap();
    this.addSensorsInMap();
  }

  updatePolygonLayers() {
    this.polygonLayer.clearLayers();
    this.addFieldInMap();
  }

  getNotes() {
    this.backendService.note.getNoteByWorkspace(this.workspaceService.workspaceId)
      .subscribe(value => this.notes.next(value));
  }

  getSensors() {
    this.backendService.sensor.getSensorByWorkspace(this.workspaceService.workspaceId)
      .subscribe(value => this.sensors.next(value));
  }

  getFields() {
    this.backendService.field.getFieldsById(this.workspaceService.workspaceId)
      .subscribe(value => this.fields.next(value));
  }
}
