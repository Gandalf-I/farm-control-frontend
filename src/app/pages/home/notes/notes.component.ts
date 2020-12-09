import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { BackendService } from '@backend/backend.service';
import { WorkspaceService } from '@pages/home/shared/services/workspace.service';
import { Note } from '@shared/interfaces/note.interface';
import { MapService } from '@pages/home/shared/services/map.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotesComponent implements OnInit {

  noteForm: FormGroup;
  notes = new BehaviorSubject<Note[]>([]);

  constructor(private backendService: BackendService,
              private workspaceService: WorkspaceService,
              private fb: FormBuilder,
              private mapService: MapService) {
  }

  ngOnInit(): void {
    this.initNoteForm();
    setTimeout(() => {
      this.getNotes();
    }, 1000);
  }

  private initNoteForm(): void {
    this.noteForm = this.fb.group({
      name: ['', [Validators.required, Validators.min(3)]],
      description: [''],
    });
  }

  getNotes() {
    this.backendService.note.getNoteByWorkspace(this.workspaceService.workspace.value.id)
      .subscribe(value => this.notes.next(value));
  }

  createSeason() {
    this.mapService.startMarker();
    if (this.noteForm.invalid) {
      this.noteForm.markAllAsTouched();
      return;
    }

    this.backendService.note.createNote(this.workspaceService.workspace.value.id, this.noteForm.value)
      .subscribe((value) => {
        this.noteForm.reset();
        this.noteForm.markAsUntouched();
        this.notes.next([...this.notes.value, value]);
      });
  }

  deleteNote(note: Note) {
    this.backendService.note.deleteNote(note.id).subscribe(() => {
      this.notes.next(this.notes.value.filter(value => value.id !== note.id));
    });
  }

}
