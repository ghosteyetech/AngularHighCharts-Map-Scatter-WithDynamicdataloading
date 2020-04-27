declare var require: any;

import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import MapModule from 'highcharts/modules/map';
import { ApiService } from '../services/api.service';

const sriLanka = require('@highcharts/map-collection/countries/lk/lk-all.geo.json');

MapModule(Highcharts);

@Component({
  selector: 'app-country-map',
  templateUrl: './country-map.component.html',
  styleUrls: ['./country-map.component.scss']
})
export class CountryMapComponent implements OnInit {

  data = [
    ['lk-bc', 0],
    ['lk-mb', 1],
    ['lk-ja', 2],
    ['lk-kl', 3],
    ['lk-ky', 4],
    ['lk-mt', 5],
    ['lk-nw', 6],
    ['lk-ap', 7],
    ['lk-pr', 8],
    ['lk-tc', 9],
    ['lk-ad', 10],
    ['lk-va', 11],
    ['lk-mp', 12],
    ['lk-kg', 13],
    ['lk-px', 14],
    ['lk-rn', 15],
    ['lk-gl', 16],
    ['lk-hb', 17],
    ['lk-mh', 18],
    ['lk-bd', 19],
    ['lk-mj', 20],
    ['lk-ke', 21],
    ['lk-co', 22],
    ['lk-gq', 23],
    ['lk-kt', 24]
  ];

  title = "app";
  chart;
  updateFromInput = false;
  Highcharts = Highcharts;
  chartConstructor = "mapChart";
  chartCallback;

  public options: any = {
    chart: {
      map: sriLanka,
      backgroundColor:'#d7e7ff',
    },
    title: {
      text: 'Call Summary'
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        alignTo: 'spacingBox'
      }
    },
    colorAxis: {
      min: 0,
      linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
      stops: [
          [0, '#ffddd6'], // start
          [0.5, '#ff8369'], // middle
          [1, '#fe2c00'] // end
      ]
    },
    series: [{
      name: 'Total Calls',
      states: {
          hover: {
              color: '#BADA55'
          }
      },
      dataLabels: {
          enabled: true,
          format: '{point.name}'
      },
      data: this.data
   }]}

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    this.apiService.getSlMapData().then((res)=>{
      console.log('getDotGraphDataDashboard: ', res);
      console.log('resdata: ', res['data']);
      this.mapLoadedData(res['data']);
    });
  
    
  }

  mapLoadedData(slmapdata: any) {
    this.data = [
      ['lk-bc', +slmapdata[4]],// 4. madakalapuwa
      ['lk-mb', +slmapdata[15]],//15. Mannar
      ['lk-ja', +slmapdata[9]],//9.jaffna
      ['lk-kl', +slmapdata[13]],//13. kilinohchi
      ['lk-ky', +slmapdata[11]],//11. kandy
      ['lk-mt', +slmapdata[16]],//16. mathale
      ['lk-nw', +slmapdata[20]],//20. nuwara eliya
      ['lk-ap', +slmapdata[1]],//1, ampara
      ['lk-pr', +slmapdata[21]],//21. polonnaruwa
      ['lk-tc', +slmapdata[24]],//24. trincomalee
      ['lk-ad', +slmapdata[2]],//2. anuraha
      ['lk-va', +slmapdata[25]],//25. vavniya
      ['lk-mp', +slmapdata[19]],//19. mulativ
      ['lk-kg', +slmapdata[14]],//14. kurunegala
      ['lk-px', +slmapdata[22]],//22. puttalam
      ['lk-rn', +slmapdata[23]],//23. rathnapura
      ['lk-gl', +slmapdata[6]],//6. galle
      ['lk-hb', +slmapdata[8]],//8. hambantota
      ['lk-mh', +slmapdata[17]],//17 matara
      ['lk-bd', +slmapdata[3]],//3. badulla
      ['lk-mj', +slmapdata[18]],//18.  monaragala
      ['lk-ke', +slmapdata[12]],// 12. kegalle
      ['lk-co', +slmapdata[5]],// 5. colombo
      ['lk-gq', +slmapdata[7]],//7. gampaha
      ['lk-kt', +slmapdata[10]]//10.kalutara
  ];


    this.options.series = [
      {
        name: 'Total Calls',
        states: {
            hover: {
                color: '#BADA55'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        },
        data: this.data
     }
    ]

    Highcharts.mapChart('slmapcontainer', this.options);
  }

}
