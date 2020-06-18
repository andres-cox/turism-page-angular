import { Component, OnInit } from '@angular/core';
import { Atraction } from '../shared/atraction.model';
import { TranslationService } from '../services/translation.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit {
  // public atractions: Atraction[] = [
  //   new Atraction("Vendimia", "text", 'src/assets/atractions-imgs/vendimia.jpeg'),
  //   new Atraction("Vino", "text", "http://www.eldiario.net/noticias/2015/2015_02/nt150203/f_2015-02-03_40.jpg"),
  //   new Atraction("Comida", "text", "https://shoestringduo.files.wordpress.com/2015/04/cangrejitos-food-tarija.jpg?w=1920&h=768&crop=1")
  // ];
  atractions: Observable<any[]> = this.translationService.getDiscoverCards();
  constructor(private translationService: TranslationService) { }

  ngOnInit() {
    this.translationService.statusUpdated.subscribe(()=>{
      this.atractions = this.translationService.getDiscoverCards();
    })
  }

}
