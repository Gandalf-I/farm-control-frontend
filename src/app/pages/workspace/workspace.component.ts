import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BackendService } from '@backend/backend.service';
import { User } from '@shared/interfaces/user.interface';
import { UserService } from '@core/services/user.service';
import { Workspace } from '@shared/interfaces/workspace.interface';

@UntilDestroy()
@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss'],
})
export class WorkspaceComponent implements OnInit {

  workspaceForm: FormGroup;
  myWorkspaces: Workspace[];
  accessWorkspaces: Workspace[];
  users = new BehaviorSubject<User[]>([]);
  selectUsers: User[] = [];
  message: string;

  constructor(private fb: FormBuilder, private backendService: BackendService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.initWorkspaceForm();

    this.workspaceForm.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged((a, b) => a.login === b.login),
        switchMap(form => this.backendService.user.getUsersByLogin(form.login)),
        untilDestroyed(this),
      ).subscribe((value) => {
        this.users.next(value.filter(user => this.checkSelectUser(user.login)));
      });
    this.workspaceForm.patchValue({ login: '' });

    this.getMyWorkspaces();
    this.getAccessWorkspaces();
  }

  private initWorkspaceForm(): void {
    this.workspaceForm = this.fb.group({
      name: ['', [Validators.required, Validators.min(3)]],
      login: [null],
    });
  }

  addUserInWorkspace() {
    const login = this.workspaceForm.get('login');
    if (!login.invalid && this.checkSelectUser(login.value)) {
      this.backendService.user.getUsersByLogin(login.value)
        .pipe(untilDestroyed(this))
        .subscribe((user) => {
          if (user.length === 1 && this.checkSelectUser(user[0].login)) {
            this.selectUsers.push(user[0]);
            this.workspaceForm.patchValue({ login: '' });
          }
        });
    } else {
      this.workspaceForm.patchValue({ login: '' });
    }
  }

  createWorkspace() {
    if (this.workspaceForm.get('name').invalid) {
      return;
    }

    this.backendService.workspace.createWorkspace(
      {
        name: this.workspaceForm.get('name').value,
        usersId: this.selectUsers.map(user => user.id),
      },
    )
      .pipe(
        untilDestroyed(this))
      .subscribe((value) => {
        this.message = null;
        this.myWorkspaces.push(value);
      },
        (err) => {
          this.message = err.error.message;
          this.selectUsers = [];
        });
  }

  getMyWorkspaces() {
    this.backendService.workspace.getWorkspaceByUserCreated().subscribe(value => this.myWorkspaces = value);
  }

  getAccessWorkspaces() {
    this.backendService.workspace.getWorkspaceByUserAccess().subscribe(value => this.accessWorkspaces = value);
  }

  checkSelectUser(login) {
    return !this.selectUsers.map(user => user.login).includes(login) && this.userService.user.login !== login;
  }

  deleteWorkspace(workspace: Workspace) {
    this.backendService.workspace.deleteWorkspace(workspace.id).subscribe(() => {
      this.myWorkspaces = this.myWorkspaces.filter(value => value.id !== workspace.id);
    });
  }
}
