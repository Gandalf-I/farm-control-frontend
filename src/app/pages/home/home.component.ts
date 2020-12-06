import { Component, ChangeDetectionStrategy } from '@angular/core';
import { control, DrawEvents, featureGroup, FeatureGroup, icon, latLng, tileLayer } from 'leaflet';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {

  constructor(public authService: AuthService) {
  }

  drawnItems: FeatureGroup = featureGroup();
  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Open Street Map' }),
    ],
    zoom: 5,
    center: latLng({ lat: 46.879966, lng: -121.726909 }),
    zoomControl: false,
  };

  drawOptions = {
    position: 'topright',
    draw: {
      marker: {
        icon: icon({
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

  public onDrawCreated(e: any) {
    console.log('Draw Created Event!');

    const layer = (e as DrawEvents.Created).layer;
    this.drawnItems.addLayer(layer);
  }

  public onDrawStart(e: any) {
    console.log('Draw Started Event!');
  }

  onMapReady(map: L.Map) {
    setTimeout(() => {
      map.invalidateSize();
      control.zoom({
        position:'bottomright',
      }).addTo(map);
    }, 0);
  }
}
