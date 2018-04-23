import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { MapComponent } from './map/map.component';
import { MapViewComponent } from './map-view/map-view.component';
import { ZoomComponent } from './zoom/zoom.component';
import { StandardLayoutComponent } from './standard-layout/standard-layout.component';
import { ReversedLayoutComponent } from './reversed-layout/reversed-layout.component';
import { OsmLayerComponent } from './osm-layer/osm-layer.component';
import { LayerGroupComponent } from './layer-group/layer-group.component';

const components = [
  MapComponent, MapViewComponent, ZoomComponent, StandardLayoutComponent, ReversedLayoutComponent, OsmLayerComponent, LayerGroupComponent
];

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: components,
  declarations: components
})
export class GerardModule { }
