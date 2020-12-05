import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

const languages = ['en', 'ua'];

@Component({
  selector: 'app-switch-language-button',
  templateUrl: './switch-language-button.component.html',
  styleUrls: ['./switch-language-button.component.scss'],
})
export class SwitchLanguageButtonComponent implements OnInit {

  lang: string;

  constructor(public translateService: TranslateService) {
  }

  ngOnInit() {
    this.lang = this.translateService.getDefaultLang();
  }

  public setLang(lang: string): void {
    const isCorrectLang = languages.includes(lang);

    if (!isCorrectLang) {
      return;
    }

    if (lang === this.translateService.getDefaultLang()) {
      return;
    }

    this.translateService.setDefaultLang(lang);
    this.lang = this.translateService.getDefaultLang();
  }
}
