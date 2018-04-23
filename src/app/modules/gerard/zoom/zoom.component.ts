import { Component, OnInit, Input, Optional } from '@angular/core';
import { MapComponent } from '../map/map.component';
import { MapViewComponent } from '../map-view/map-view.component';

@Component({
  selector: 'ger-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.scss']
})
export class ZoomComponent implements OnInit {
  canZoomIn = true;
  canZoomOut = true;

  constructor(private viewContainer: MapViewComponent) {
  }

  ngOnInit() {
    this.zoomChanged();
    this.viewContainer.view.on('change:resolution', () => {
      this.zoomChanged();
    });
  }

  zoomIn() {
    this.viewContainer.view.setZoom(this.viewContainer.view.getZoom() + 1);
    this.zoomChanged();
  }

  zoomOut() {
    this.viewContainer.view.setZoom(this.viewContainer.view.getZoom() - 1);
    this.zoomChanged();
  }

  private zoomChanged() {
    const zoom = this.viewContainer.view.getZoom();
    this.canZoomIn = zoom + 1 <= this.viewContainer.view.getMaxZoom();
    this.canZoomOut = zoom - 1 >= this.viewContainer.view.getMinZoom();
  }
}
