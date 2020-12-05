import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchLanguageButtonComponent } from './switch-language-button.component';

describe('SwitchLanguageButtonComponent', () => {
  let component: SwitchLanguageButtonComponent;
  let fixture: ComponentFixture<SwitchLanguageButtonComponent>;

  beforeEach(async(() => {
      TestBed.configureTestingModule({
          declarations: [SwitchLanguageButtonComponent],
        }).compileComponents();
    }));

  beforeEach(() => {
      fixture = TestBed.createComponent(SwitchLanguageButtonComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

  it('should create', () => {
      expect(component).toBeTruthy();
    });
});
