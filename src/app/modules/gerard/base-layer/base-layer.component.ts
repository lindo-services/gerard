import { fromNullable, none, Option, some } from 'fp-ts/lib/Option';

import { LayerGroupComponent } from '../layer-group/layer-group.component';
import { MapComponent } from '../map/map.component';

export interface LayerContainer {
  getLayerGroup(): ol.layer.Group;
}

export abstract class BaseLayerComponent {
  private container: LayerContainer;

  constructor(mapContainer: MapComponent, layerContainer: LayerContainer) {
    this.container = fromNullable(layerContainer).getOrElse(mapContainer);
  }

  protected addBaseLayer(baselayer: ol.layer.Base, index?: number) {
    if (index) {
      this.container.getLayerGroup().getLayers().insertAt(index, baselayer);
    } else {
      this.container.getLayerGroup().getLayers().push(baselayer);
    }
  }
}
