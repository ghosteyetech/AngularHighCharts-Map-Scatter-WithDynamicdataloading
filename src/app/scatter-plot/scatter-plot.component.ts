import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scatter-plot',
  templateUrl: './scatter-plot.component.html',
  styleUrls: ['./scatter-plot.component.scss']
})
export class ScatterPlotComponent implements OnInit {

  @Input() scatterData: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.scatterData);
  }

}
