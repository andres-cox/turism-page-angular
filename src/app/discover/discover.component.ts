import { Component, OnInit } from '@angular/core';
import { Atraction } from '../shared/atraction.model';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit {
  public atractions: Atraction[] = [
    new Atraction("Vendimia", "text", "http://lavozdetarija.com/wp-content/uploads/2018/03/WhatsApp-Image-2018-03-11-at-17.58.05-1024x682.jpeg"),
    new Atraction("Vino", "text", "http://www.eldiario.net/noticias/2015/2015_02/nt150203/f_2015-02-03_40.jpg"),
    new Atraction("Comida", "text", "https://shoestringduo.files.wordpress.com/2015/04/cangrejitos-food-tarija.jpg?w=1920&h=768&crop=1")
  ];
  constructor() { }

  ngOnInit() {
  }

}
