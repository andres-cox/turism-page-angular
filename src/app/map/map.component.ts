import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  myVar: string;
  constructor() { }

  ngOnInit() {
  }
  getMap(myvar: string) {
    this.myVar = myvar;

  }
}
