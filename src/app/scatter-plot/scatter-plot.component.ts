import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ApiService } from '../services/api.service';
import { DatePipe } from '@angular/common';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
  selector: 'app-scatter-plot',
  templateUrl: './scatter-plot.component.html',
  styleUrls: ['./scatter-plot.component.scss']
})
export class ScatterPlotComponent implements OnInit {

  constructor(private apiService: ApiService, public datePipe: DatePipe) { 
    const datePipeString = datePipe.transform(Date.now(),'yyyy-MM-dd');
    console.log(datePipeString);
  }

  formatXAxis(val) {
    return this.datePipe.transform(val,"MM-dd-yyyy");
  }

  series = [
    { name: 'Category 1', color: '#28a745', data: [] },
    { name: 'Category 2', color: '#007bff', data: [] },
    { name: 'Category 3', color: '#ffc107', data: [] },
    { name: 'Category 4', color: '#dc3545', data: [] },
  ]

  public options: any = {
    chart: {
      type: 'scatter',
      // height: 700
    },
    data: {
      parseDate: Date.parse
    },
    title: {
      text: ''
    },
    credits: {
      enabled: false
    },
    tooltip: {
      headerFormat: '<b>{series.name}</b><br>',
      pointFormat: '{point.x} , {point.y} '
    },
    xAxis: {
      type: 'datetime',
      labels: { }
    },
    yAxis: {
      title: {
        text: 'Count'
      }
    },
    series: this.series
  }

  ngOnInit(): void {

    this.apiService.getDotGraphDataDashboard().then((res)=>{
      console.log('getDotGraphDataDashboard: ', res);
      
      const dates = res['data']['dates'];
      let cat1Array = [];
      let cat2Array = [];
      let cat3Array = [];
      let cat4Array = [];

      
      dates.forEach((date, index) => {
       cat1Array.push([date, +res['data'][1][index]]);
       cat2Array.push([date, +res['data'][2][index]]);
       cat3Array.push([date, +res['data'][3][index]]);
       cat4Array.push([date, +res['data'][4][index]]);
      });
     
      this.options.series = [
        { name: 'Category 1', color: '#28a745', data: cat1Array.map(function(point) { return [Date.parse(point[0]+''), point[1]] }) },
        { name: 'Category 2', color: '#007bff', data: cat2Array.map(function(point) { return [Date.parse(point[0]+''), point[1]] }) },
        { name: 'Category 3', color: '#ffc107', data: cat3Array.map(function(point) { return [Date.parse(point[0]+''), point[1]] }) },
        { name: 'Category 4', color: '#dc3545', data: cat4Array.map(function(point) { return [Date.parse(point[0]+''), point[1]] }) },
      ]
    
      Highcharts.chart('container', this.options);
      
    });

    
  }

}
