import { Component, OnInit, Input, Optional, SkipSelf, Host } from '@angular/core';
import { MapComponent } from '../map/map.component';
import * as ol from 'openlayers';
import { BaseLayerComponent, LayerContainer } from '../base-layer/base-layer.component';

@Component({
  selector: 'ger-layer-group',
  template: '<ng-content></ng-content>'
})
export class LayerGroupComponent extends BaseLayerComponent implements OnInit, LayerContainer {
  @Input() name: string;
  @Input() background = false;
  @Input() index?: number;
  @Input() opacity?: number;
  @Input() visible?: boolean;
  @Input() extent?: ol.Extent;
  @Input() zIndex?: number;
  @Input() minResolution?: number;
  @Input() maxResolution?: number;

  private layerGroup: ol.layer.Group;

  constructor(private map: MapComponent, @SkipSelf() @Host() @Optional() private parentGroup: LayerGroupComponent) {
    super(map, parentGroup);
  }

  ngOnInit() {
    this.layerGroup = new ol.layer.Group({
      opacity: this.opacity,
      visible: this.visible,
      extent: this.extent,
      zIndex: this.zIndex,
      minResolution: this.minResolution,
      maxResolution: this.maxResolution
    });
    this.layerGroup.set('ger-background', this.background);
    this.layerGroup.set('ger-name', this.name);
    this.layerGroup.set('ger-component', this);
    this.addBaseLayer(this.layerGroup, this.index);
  }

  getLayerGroup(): ol.layer.Group {
    return this.layerGroup;
  }

}
