import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-melody-chart',
  templateUrl: './melody-chart.component.html',
  styleUrls: ['./melody-chart.component.css']
})
export class MelodyChartComponent implements OnInit {
  public graph = {
    data: [
      {
        x: ['giraffes', 'orangutans', 'monkeys'],
        y: [20, 14, 23],
        name: 'SF Zoo',
        type: 'bar'
      },
      {
        x: ['giraffes', 'orangutans', 'monkeys'],
        y: [12, 18, 29],
        name: 'LA Zoo',
        type: 'bar'
      }
    ],
    layout: { barmode: 'stack', title: 'A Fancy Plot' }
  };

  constructor() {}

  ngOnInit() {}
}
