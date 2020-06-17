import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private translationService: TranslationService) { }

  ngOnInit() {
  }

  changeLanguage(lang) {
    this.translationService.changeLanguage(lang);
    this.translationService.statusUpdated.emit(lang);
  }
}
