import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeasonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
