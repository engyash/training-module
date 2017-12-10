import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as _ from 'lodash';
import * as c3 from 'c3';

import { UserService } from './../../../../../services';

@Component({
  selector: 'login-activity',
  templateUrl: './login-activity.component.html',
  styleUrls: ['./login-activity.component.scss']
})
export class LoginActivityComponent implements OnInit {
    private dateFormat = '%Y-%m-%d';


    constructor(private userService: UserService, private route: ActivatedRoute) {

    }

  ngOnInit() {
      var userId = this.route.snapshot.params['userId'];
      this.getLoginActivities(userId);   
  }

  getLoginActivities(userId) {
      var data = this.userService.getLoginActivity(userId);
      this.loadChart(data);
  }

  loadChart(data) {
      var chartData: any = {};
      chartData.x = 'x';
      chartData.xFormat = this.dateFormat;
      chartData.type = 'bar';
      var chartX: any = _.map(data, 'date');
      var chartY: any = _.map(data, 'count');
      
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
                      format: this.dateFormat
                  }
              },

          }
      });
  }
}



