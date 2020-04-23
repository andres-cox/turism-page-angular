import { Component, OnInit } from '@angular/core';
import { Place } from '../shared/place.model';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {

  public places: Place[] = [
    new Place("SAN ROQUE", "https://lavozdetarija.com/wp-content/uploads/2017/04/San-Roque.jpg"),
    new Place("CASTILLO AZUL", "https://upload.wikimedia.org/wikipedia/commons/b/b3/Castillo_Azul_-_Tarija.jpg"),
    new Place("PARQUE DE LAS FLORES", "https://lavozdetarija.com/wp-content/uploads/2017/12/Parque-de-las-flores-Tarija.jpg"),
    new Place("CASA DORADA", "https://lavozdetarija.com/wp-content/uploads/2017/07/casa-dorada-tarija-e1498922606855.jpg")
  ];
  constructor() { }

  ngOnInit() {
  }

}
