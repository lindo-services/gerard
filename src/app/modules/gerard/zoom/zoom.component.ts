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
    this.viewContainer.getView().on('change:resolution', () => {
      this.zoomChanged();
    });
  }

  zoomIn() {
    this.viewContainer.getView().setZoom(this.viewContainer.getView().getZoom() + 1);
    this.zoomChanged();
  }

  zoomOut() {
    this.viewContainer.getView().setZoom(this.viewContainer.getView().getZoom() - 1);
    this.zoomChanged();
  }

  private zoomChanged() {
    const zoom = this.viewContainer.getView().getZoom();
    this.canZoomIn = zoom + 1 <= this.viewContainer.getView().getMaxZoom();
    this.canZoomOut = zoom - 1 >= this.viewContainer.getView().getMinZoom();
  }
}
