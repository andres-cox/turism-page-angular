import { Injectable, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  public activeLang = 'es';
  statusUpdated = new EventEmitter<string>();

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.activeLang);
  }

  changeLanguage(lang) {
    this.activeLang = lang;
    this.translate.use(lang);
  }
}
