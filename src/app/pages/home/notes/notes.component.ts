import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BackendService } from '@backend/backend.service';
import { WorkspaceService } from '@pages/home/shared/services/workspace.service';
import { Note } from '@shared/interfaces/note.interface';
import { MapService } from '@pages/home/shared/services/map.service';
import { NotesService } from '@pages/home/notes/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotesComponent implements OnInit {

  noteForm: FormGroup;

  constructor(private backendService: BackendService,
              private workspaceService: WorkspaceService,
              private fb: FormBuilder,
              public mapService: MapService,
              public notesService: NotesService) {
  }

  ngOnInit(): void {
    this.initNoteForm();
  }

  private initNoteForm(): void {
    this.noteForm = this.fb.group({
      name: ['', [Validators.required, Validators.min(3)]],
      comment: [''],
    });
  }

  createNote() {
    if (this.noteForm.invalid) {
      this.noteForm.markAllAsTouched();
      return;
    }
    this.notesService.noteForm = this.noteForm.value;
    this.mapService.startMarker('note');
  }

  deleteNote(note: Note) {
    this.backendService.note.deleteNote(note.id).subscribe(() => {
      this.mapService.notes.next(this.mapService.notes.value.filter(value => value.id !== note.id));
      this.mapService.updateMarkerLayers();
    });
  }

  goToMarker(note: Note) {
    this.mapService.map.flyTo({ ...note });
  }
}
