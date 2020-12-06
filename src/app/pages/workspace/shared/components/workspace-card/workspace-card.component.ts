import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-workspace-card',
  templateUrl: './workspace-card.component.html',
  styleUrls: ['./workspace-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkspaceCardComponent implements OnInit {
  workspace: any;

  constructor() { }

  ngOnInit(): void {
  }

  exit() {

  }
}
