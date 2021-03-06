import { Injectable, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subscription } from 'rxjs';

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

  getDiscoverCards(): Observable<any[]> {
    return this.translate.get('discover.cards');
  }

  getPlaces(): Observable<any[]> {
    return this.translate.get('places.sites');
  }
}
