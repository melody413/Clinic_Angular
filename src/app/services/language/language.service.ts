import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage: string;

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.currentLanguage = 'en'; // set default language
  }

  public setLanguage(language: string) {
    this.currentLanguage = language;
    this.translate.use(language);
  }

  public getCurrentLanguage() {
    return this.currentLanguage;
  }
}