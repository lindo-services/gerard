import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ger-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }
}
