import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoaderService {
  public isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public isAutoLoading: boolean = true;

  public startLoading(): void {
    if (this.isAutoLoading) {
      this.isLoading$.next(true);
    }
  }

  public stopLoading(): void {
    if (this.isAutoLoading) {
      this.isLoading$.next(false);
    }
  }

  public set autoLoading(state: boolean) {
    this.isAutoLoading = state;
  }
}
