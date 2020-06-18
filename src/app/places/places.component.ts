import { Component, OnInit } from '@angular/core';
import { Place } from '../shared/place.model';
import { Observable } from 'rxjs';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {

  places: Observable<any[]> = this.translationService.getPlaces();

  constructor(private translationService: TranslationService) { }

  ngOnInit() {
    this.translationService.statusUpdated.subscribe(() => {
      this.places = this.translationService.getPlaces();
    })
  }

}
