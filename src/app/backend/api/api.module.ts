import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserApiService } from '@backend/api/user-api.service';
import { AuthService } from '@backend/api/auth.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    UserApiService,
    AuthService,
  ],
})
export class ApiModule { }
