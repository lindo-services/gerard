import { Component, OnInit, Input } from '@angular/core';
import * as ol from 'openlayers';
import { LayerContainer } from '../base-layer/base-layer.component';

@Component({
  selector: 'ger-map',
  template: '<ng-content></ng-content>'
})
export class MapComponent implements OnInit, LayerContainer {
  map: ol.Map;

  constructor() { }

  ngOnInit() {
    this.map = new ol.Map({
      controls: [],
      interactions: [],
      layers: [],
      pixelRatio: 1,
      logo: false
    });
  }

  getLayerGroup(): ol.layer.Group {
    return this.map.getLayerGroup();
  }
}
