import { Component, OnInit, Input, Optional } from '@angular/core';
import { MapComponent } from '../map/map.component';
import { MapViewComponent } from '../map-view/map-view.component';

@Component({
  selector: 'ger-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.scss']
})
export class ZoomComponent implements OnInit {
  @Input()
  view: MapViewComponent;

  constructor(@Optional() view: MapViewComponent) {
    if ( view) {
      this.view = view;
    }
  }

  ngOnInit() {
  }

}
