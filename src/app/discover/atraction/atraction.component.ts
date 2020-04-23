import { Component, OnInit, Input } from '@angular/core';
import { Atraction } from 'src/app/shared/atraction.model';

@Component({
  selector: 'app-atraction',
  templateUrl: './atraction.component.html',
  styleUrls: ['./atraction.component.scss']
})
export class AtractionComponent implements OnInit {
  @Input() atraction: Atraction;
  constructor() { }

  ngOnInit() {
  }

}
