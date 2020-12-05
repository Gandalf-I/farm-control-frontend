import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SensorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
