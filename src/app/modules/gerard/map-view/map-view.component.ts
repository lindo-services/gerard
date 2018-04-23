import { Component, OnInit, Optional, Injectable, Input, ViewChild, ElementRef } from '@angular/core';
import { MapComponent } from '../map/map.component';
import * as ol from 'openlayers';
import * as proj4x from 'proj4';
const proj4 = (proj4x as any).default;

@Component({
  selector: 'ger-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit {
  private static readonly lambert72 = MapViewComponent.configureerLambert72();

  @Input() mapContainer: MapComponent;
  @Input() minZoom = 2; // TODO naar config
  @Input() maxZoom = 15; // TODO naar config

  @ViewChild('mapdiv') mapElement: ElementRef;

  view: ol.View;

  private static configureerLambert72() {
    ol.proj.setProj4(proj4);
    proj4.defs(
      'EPSG:31370',
      '+proj=lcc +lat_1=51.16666723333333 +lat_2=49.8333339 +lat_0=90 +lon_0=4.367486666666666 +x_0=150000.013 +y_0=5400088.438 ' +
        '+ellps=intl +towgs84=-125.8,79.9,-100.5 +units=m +no_defs'
    );
  }

  constructor(@Optional() map: MapComponent) {
    if (map) {
      this.mapContainer = map;
    }
  }

  ngOnInit() {
    const dienstkaartProjectie: ol.proj.Projection = ol.proj.get('EPSG:31370');
    // Zonder deze extent zoomen we op de hele wereld en Vlaanderen is daar maar een heeel klein deeltje van
    dienstkaartProjectie.setExtent([18000.0, 152999.75, 280144.0, 415143.75]); // zet de extent op die van de dienstkaart

    this.view = new ol.View({
      projection: dienstkaartProjectie,
      center: [130000, 193000],
      minZoom: this.minZoom,
      maxZoom: this.maxZoom,
      zoom: 5
    });
    this.mapContainer.map.setView(this.view);
    this.mapContainer.map.setTarget(this.mapElement.nativeElement);
  }

}
