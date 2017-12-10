import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'login-activity',
  templateUrl: './login-activity.component.html',
  styleUrls: ['./login-activity.component.scss']
})
export class LoginActivityComponent implements OnInit {

  constructor() { }
  ngOnInit() {
      this.loadChart();
  }

  loadChart() {
      var chartData: any = {};
      chartData.x = 'x';
      chartData.xFormat = "%Y-%m-%d";
      chartData.type = 'bar';
      var chartX: any = ["2017-11-20", "2017-11-21", "2017-11-22", "2017-11-23", "2017-11-24"];
      var chartY: any = [2, 4, 1, 7, 3];
      
      chartX.splice(0, 0, 'x');      
      chartY.splice(0, 0, 'Visits');
      chartData.columns = [];
      chartData.columns.push(chartX);
      chartData.columns.push(chartY);
      var chart = c3.generate({
          bindto: '#activity-chart',
          data: chartData,
          bar: {
              width: {
                  ratio: 0.5 // this makes bar width 50% of length between ticks
              }

          },
          axis: {
              x: {
                  type: 'timeseries',
                  tick: {
                      format: "%Y-%m-%d"
                  }
              },

          }
      });
  }
}



