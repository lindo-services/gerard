import { Component, OnInit, Input } from '@angular/core';
import * as ol from 'openlayers';

@Component({
  selector: 'ger-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Input() name: string;
  map: ol.Map;

  constructor() { }

  ngOnInit() {
    this.map = new ol.Map({
      controls: [],
      interactions: [],
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      pixelRatio: 1,
      logo: false
    });
  }
}
