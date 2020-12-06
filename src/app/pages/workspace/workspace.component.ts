import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BackendService } from '@backend/backend.service';
import { User } from '@shared/interfaces/user.interface';
import { UserService } from '@core/services/user.service';

@UntilDestroy()
@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss'],
})
export class WorkspaceComponent implements OnInit {
  workspaces: any;

  workspaceForm: FormGroup;
  users = new BehaviorSubject<User[]>([]);
  selectUsers: User[] = [];

  constructor(private fb: FormBuilder, private backendService: BackendService, private userService :UserService) {
  }

  ngOnInit(): void {
    this.initWorkspaceForm();

    this.workspaceForm.valueChanges
      .pipe(
        debounceTime(200),
        distinctUntilChanged((a, b) => a.login === b.login),
        switchMap(form => this.backendService.user.getUsersByLogin(form.login)),
        untilDestroyed(this),
      ).subscribe((value) => {
        this.users.next(value.filter(user => !this.selectUsers.includes(user)));
      });
  }

  private initWorkspaceForm(): void {
    this.workspaceForm = this.fb.group({
      name: ['', [Validators.required, Validators.min(3)]],
      login: [''],
    });
    this.workspaceForm.reset();
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
    this.backendService.workspace.createWorkspace(
      {
        name: this.workspaceForm.get('name').value,
        usersId: this.selectUsers.map(user => user.id),
      },
      )
      .pipe(untilDestroyed(this))
      .subscribe();
  }

  checkSelectUser(login) {
    console.log(this.userService.user);
    return !this.selectUsers.map(user => user.login).includes(login) && this.userService.user.login !== login;
  }
}
