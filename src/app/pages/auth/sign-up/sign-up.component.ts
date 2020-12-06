import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@core/services/auth.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent implements OnInit {
  public signUpForm: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router,
              ) {
  }

  ngOnInit(): void {
    this.initSignInForm();
  }

  private initSignInForm(): void {
    this.signUpForm = this.fb.group({
      login: ['', [Validators.minLength(4)]],
      email: ['', [
        Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)],
      ],
      password: ['', [Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.signUpForm.invalid) {
      return;
    }
    this.authService.signUp(this.signUpForm.value)
      .pipe(
        switchMap(() => this.authService.signIn(this.signUpForm.value)),
        untilDestroyed(this),
      )
      .subscribe(() => {
        this.router.navigate(['workspaces']);
      });
  }
}
