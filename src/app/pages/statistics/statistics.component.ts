import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { airHumidity, airTemp } from './shared/config';
import { BackendService } from '@backend/backend.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatisticsComponent implements OnInit {

  readonly airTemp = airTemp;
  readonly airHumidity = airHumidity;

  constructor(private backendService:BackendService) { }

  ngOnInit(): void {
    this.backendService.measurement.getMeasurementsByWorkspace().subscribe();
  }

}
