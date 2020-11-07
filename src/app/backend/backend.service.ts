import { Injectable } from '@angular/core';
import { UserApiService } from '@backend/api/user-api.service';
import { AuthService } from '@backend/api/auth.service';

@Injectable()
export class BackendService {

  constructor(public readonly user: UserApiService,
              public readonly auth: AuthService,
  ) { }
}
