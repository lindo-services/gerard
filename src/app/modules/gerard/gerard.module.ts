import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { MapViewComponent } from './map-view/map-view.component';
import { ZoomComponent } from './zoom/zoom.component';
import { StandardLayoutComponent } from './standard-layout/standard-layout.component';
import { ReversedLayoutComponent } from './reversed-layout/reversed-layout.component';

const components = [MapComponent, MapViewComponent, ZoomComponent, StandardLayoutComponent, ReversedLayoutComponent];

@NgModule({
  imports: [
    CommonModule
  ],
  exports: components,
  declarations: components
})
export class GerardModule { }
