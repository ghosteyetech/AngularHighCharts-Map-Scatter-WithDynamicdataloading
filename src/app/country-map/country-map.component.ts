import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-country-map',
  templateUrl: './country-map.component.html',
  styleUrls: ['./country-map.component.scss']
})
export class CountryMapComponent implements OnInit {

  @Input() mapData: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.mapData);
  }

}
