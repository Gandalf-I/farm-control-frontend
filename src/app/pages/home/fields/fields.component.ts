import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MapService } from '@pages/home/shared/services/map.service';
import { Field } from '@shared/interfaces/field';
import { BackendService } from '@backend/backend.service';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldsComponent implements OnInit {

  constructor(public mapService: MapService, private backendService:BackendService) { }

  ngOnInit(): void {
  }

  deleteFiled(field: Field) {
    this.backendService.field.deleteField(field.id).subscribe(() => {
      this.mapService.fields.next(this.mapService.fields.value.filter(value => value.id !== field.id));
      this.mapService.updatePolygonLayers();
    });
  }

  goToField(field: Field) {
    this.mapService.map.flyTo({ ...JSON.parse(field.points[0]) });
  }
}
