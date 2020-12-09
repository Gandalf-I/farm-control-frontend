import { Component, OnInit } from '@angular/core';
import { BackendService } from '@backend/backend.service';
import { WorkspaceService } from '@pages/home/shared/services/workspace.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Season } from '@shared/interfaces/season.interface';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss'],
})
export class SeasonsComponent implements OnInit {

  seasonForm: FormGroup;
  seasons = new BehaviorSubject<Season[]>([]);

  constructor(private backendService: BackendService, private workspaceService: WorkspaceService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initSeasonForm();
    setTimeout(() => {
      this.getSeasons();
    }, 1000);
  }

  private initSeasonForm(): void {
    this.seasonForm = this.fb.group({
      name: ['', [Validators.required, Validators.min(3)]],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
    });
  }

  getSeasons() {
    this.backendService.season.getSeasonByWorkspace(this.workspaceService.workspace.value.id)
      .subscribe(value => this.seasons.next(value));
  }

  createSeason() {
    if (this.seasonForm.invalid) {
      this.seasonForm.markAllAsTouched();
      return;
    }

    this.backendService.season.createSeason(this.workspaceService.workspace.value.id, this.seasonForm.value)
      .subscribe((value) => {
        this.seasonForm.reset();
        this.seasonForm.markAsUntouched();
        this.seasons.next([...this.seasons.value, value]);
      });
  }

  deleteSeason(season: Season) {
    this.backendService.season.deleteSeason(season.id).subscribe(() => {
      this.seasons.next(this.seasons.value.filter(value => value.id !== season.id));
    });
  }
}
