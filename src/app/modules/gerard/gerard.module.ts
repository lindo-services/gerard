import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { MapViewComponent } from './map-view/map-view.component';
import { ZoomComponent } from './zoom/zoom.component';

const components = [MapComponent, MapViewComponent, ZoomComponent];

@NgModule({
  imports: [
    CommonModule
  ],
  exports: components,
  declarations: components
})
export class GerardModule { }
