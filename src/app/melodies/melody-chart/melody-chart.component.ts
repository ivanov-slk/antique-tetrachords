import { Component, OnInit, OnDestroy } from '@angular/core';
import { SynthService, MelodyData } from '../synth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-melody-chart',
  templateUrl: './melody-chart.component.html',
  styleUrls: ['./melody-chart.component.css']
})
export class MelodyChartComponent implements OnInit, OnDestroy {
  melodyDataSubscription: Subscription;
  melodyData: MelodyData;

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

  constructor(private synthService: SynthService) {}

  ngOnInit() {
    this.melodyDataSubscription = this.synthService.melodyDataEmitter.subscribe(
      melodyData => {
        console.log(melodyData);
      }
    );
  }

  ngOnDestroy() {
    this.melodyDataSubscription.unsubscribe();
  }
}
