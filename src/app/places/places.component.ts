import { Component, OnInit } from '@angular/core';
import { Place } from '../shared/place.model';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {

  public places: Place[] = [
    new Place("SAN ROQUE", "https://lavozdetarija.com/wp-content/uploads/2017/04/San-Roque.jpg", "this a test \r\n San Roque"),
    new Place("CASTILLO AZUL", "https://upload.wikimedia.org/wikipedia/commons/b/b3/Castillo_Azul_-_Tarija.jpg", "this a test Castillo Azul"),
    new Place("PARQUE DE LAS FLORES", "https://lavozdetarija.com/wp-content/uploads/2017/12/Parque-de-las-flores-Tarija.jpg", "this a test Parque de Las Flores"),
    new Place("CASA DORADA", "https://lavozdetarija.com/wp-content/uploads/2017/07/casa-dorada-tarija-e1498922606855.jpg", "Considerada Monumento Nacional, la colosal 'Casa Dorada' con 115 años desde su construcción, se constituye en una muestra arquitectónica exquisita, en pleno centro de la 'ciudad andaluz'. <br/> Moisés Navajas Ichazo y Esperanza Morales Serrano, considerados en su tiempo los “Millonarios de Tarija”, fueron los precursores de la monumental obra, en el año 1903. <br/> A la muerte de estos ciudadanos, que no tenían descendencia, la obra, más las riquezas que contenía, pasaron a cargo de entidades regionales; instancias desde la que fue conservado el tesoro. La explicación histórica da cuenta que a lomo de mula y por caminos de herradura, los esposos trajeron diversos productos desde Europa para abastecer la botica(farmacia) que tenían en su casa, además del mobiliario, alfombras y cortinas, que algunas de ellas aún se conservan, mientras que otras, tuvieron que ser remplazadas por réplicas, ante el daño que sufrieron por el paso del tiempo. <br/>Los esposos Navajas eran acaudalados comerciantes tarijeños que decidieron construir una casa sin par, allá por el año 1887 en pleno centro de la ciudad.Su trabajo les permitió realizar viajes permanentes a Europa, continente del cual copiaron el estilo Art Nouveau o Modernismo para edificar su mansión.La pareja dedicada al comercio, importaba material agrícola, cristalería, telas, enseres de ferretería, alimentos y golosinas que comercializaban en ciudades argentinas como Salta, Tucumán y Córdoba.Una vez realizados sus negocios por esas regiones emprendían camino hacia su Tarija natal vía Potosí y Sucre, ciudades donde también vendían sus artículos.Si bien el sector de la planta baja estaba destinado al acopio del comercio que importaban desde Europa, en los espacios privados de la casa, como el salón de recepciones, comedor y un oratorio privado(donde se puede apreciar en el techo, murales pictóricos, que retratan las 14 estaciones de la Vía Crucis de Jesús), elemento que realza la devoción a la religión católica de la pareja.También se puede apreciar muebles y objetos de calidad inigualable como: Espejos con lunas venecianas, arañas de finos cristales, cortinas de damasco y gobelino, un piano de cedro rojo, esculturas de bronce, un centro de mesa de ópalo y finos muebles de estilo europeo, paredes empapeladas, alfombras persas, las cuales se encuentran debajo de un plástico, con el propósito de evitar su deterioro, por la cantidad de turistas que visitan a diario el lugar.Se observa que la pareja no escatimó recursos para mandar a plasmar varias muestras de arte plástico de esa época, las cuales aún se mantienen inalterables.")
  ];
  constructor() { }

  ngOnInit() {
  }

}
