import { Component, OnInit, Optional, Input } from '@angular/core';
import { MapComponent } from '../map/map.component';
import { LayerGroupComponent } from '../layer-group/layer-group.component';
import * as ol from 'openlayers';
import { BaseLayerComponent } from '../base-layer/base-layer.component';

@Component({
  selector: 'ger-osm-layer',
  template: '<ng-content></ng-content>'
})
export class OsmLayerComponent extends BaseLayerComponent implements OnInit {
  @Input() index?: number;
  @Input() opacity?: number;
  @Input() visible?: boolean;
  @Input() extent?: ol.Extent;
  @Input() zIndex?: number;
  @Input() minResolution?: number;
  @Input() maxResolution?: number;

  private layer;

  constructor(private map: MapComponent, @Optional() private parentGroup: LayerGroupComponent) {
    super(map, parentGroup);
  }

  ngOnInit() {
    this.layer = new ol.layer.Tile({
      source: new ol.source.OSM(),
      opacity: this.opacity,
      visible: this.visible,
      extent: this.extent,
      zIndex: this.zIndex,
      minResolution: this.minResolution,
      maxResolution: this.maxResolution
    });
    this.layer.set('ger-component', this);
    this.addBaseLayer(this.layer, this.index);
  }
}
