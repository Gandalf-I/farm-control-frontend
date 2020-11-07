import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '@core/services/user.service';
import { HttpService } from '@core/services/http.service';
import { LoaderService } from '@core/services/loader.service';
import { AuthService } from '@core/services/auth.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    UserService,
    AuthService,
    HttpService,
    LoaderService,
  ],
})
export class ServicesModule {
}
