import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@core/services/auth.service';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent implements OnInit {

  public signInForm: FormGroup;
  public warning: boolean = false;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router,
              ) {
  }

  ngOnInit(): void {
    this.initSignInForm();
  }

  private initSignInForm(): void {
    this.signInForm = this.fb.group({
      email: ['', [
        Validators.minLength(5),
        Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)],
      ],
      password: ['', [Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.signInForm.invalid) {
      return;
    }
    this.authService.signIn(this.signInForm.value)
      .pipe(
        untilDestroyed(this),
      )
      .subscribe(() => {
        this.router.navigate(['workspaces']);
      });
  }

}
