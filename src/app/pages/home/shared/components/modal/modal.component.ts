import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BackendService } from '@backend/backend.service';
import { WorkspaceService } from '@pages/home/shared/services/workspace.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent implements OnInit {

  data: any;
  file = null;

  constructor(private dialogRef: MatDialogRef<ModalComponent>,
              private backendService: BackendService,
              private workspaceService: WorkspaceService,
              @Inject(MAT_DIALOG_DATA) data) {
    this.data = data;
  }
  ngOnInit(): void {
  }

  handleFileInput(files: FileList) {
    this.file = files.item(0);
  }

  send() {
    if (!this.file) {
      return;
    }
    this.backendService.sensor.sendDataSensor(this.workspaceService.workspaceId, this.file).subscribe(() => {
      this.dialogRef.close();
    });
  }
}
