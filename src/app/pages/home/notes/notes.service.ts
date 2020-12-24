import { Injectable } from '@angular/core';
import { Note } from '@shared/interfaces/note.interface';

@Injectable({
  providedIn: 'root',
})
export class NotesService {

  noteForm: Note;

  constructor() { }
}
