import { Component, OnInit, Optional, Injectable, Input } from '@angular/core';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'ger-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {
  @Input()
  map: MapComponent;

  constructor(@Optional() map: MapComponent) {
    if ( map) {
      this.map = map;
    }
  }

  ngOnInit() {
    console.log( '****', this.map);
  }

}
