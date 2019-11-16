import { Component, OnInit, OnDestroy } from '@angular/core';
import { SynthService, MelodyData } from '../synth.service';
import { Subscription } from 'rxjs';
import { TranslatePipe } from 'src/app/shared/translate.pipe';
import { TranslateSyncService } from 'src/app/shared/translate-sync.service';

interface ChartDataBrick {
  x: string[];
  y: number[];
  type: string;
  name?: string;
}

@Component({
  selector: 'app-melody-chart',
  templateUrl: './melody-chart.component.html',
  styleUrls: ['./melody-chart.component.css']
})
export class MelodyChartComponent implements OnInit, OnDestroy {
  melodyDataSubscription: Subscription;
  changeLanguageSubscription: Subscription;
  melodyData: MelodyData;
  playedMelodies: MelodyData[] = [];
  chartData: ChartDataBrick[];

  public graph = {
    data: [
      {
        x: ['giraffes', 'orangutans', 'monkeys'],
        y: [20, 14, 23],
        // name: 'SF Zoo',
        type: 'bar'
      },
      {
        x: ['giraffes', 'orangutans', 'monkeys'],
        y: [12, 18, 29],
        // name: 'LA Zoo',
        type: 'bar'
      }
    ],
    layout: { barmode: 'stack', title: 'A Fancy Plot' }
  };

  constructor(
    private synthService: SynthService,
    private translateSyncService: TranslateSyncService,
    private translatePipe: TranslatePipe
  ) {}

  ngOnInit() {
    this.melodyDataSubscription = this.synthService.melodyDataEmitter.subscribe(
      melodyData => {
        this.playedMelodies.push(melodyData);
        this.updateChartData();
      }
    );
    this.changeLanguageSubscription = this.translateSyncService.changeEmitter.subscribe(
      () => {
        console.log('translating...');
        this.updateChartData();
      }
    );
  }

  updateChartData() {
    // figure out the number of data bricks needed
    const freqLengths = this.playedMelodies.map(element => {
      return element.cents.length;
    });
    const max = Math.max(...freqLengths);
    const min = Math.min(...freqLengths);
    if (max !== min) {
      console.log('The arrays length is different!');
      return;
    }

    // produce an empty array of data bricks
    this.chartData = [];
    for (let i = 0; i < max; i++) {
      const chartDataBrick: ChartDataBrick = {
        x: [],
        y: [],
        type: 'bar'
      };
      this.chartData.push(chartDataBrick);
    }

    // fill in the data bricks with the melodies' data
    for (let i = 0; i < this.chartData.length; i++) {
      for (let j = 0; j < this.playedMelodies.length; j++) {
        const melody = this.playedMelodies[j];
        const melodyLabel = this.translatePipe.transform(melody.name);
        if (!this.chartData[i].x.includes(melodyLabel)) {
          this.chartData[i].x.push(melodyLabel);
          this.chartData[i].y.push(melody.cents[i]);
        }
      }
    }

    // update the graph object
    this.graph.data = [...this.chartData];
  }

  ngOnDestroy() {
    this.melodyDataSubscription.unsubscribe();
    this.changeLanguageSubscription.unsubscribe();
  }
}
