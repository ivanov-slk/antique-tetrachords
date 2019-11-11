import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'antique-tetrachords';
  synth: any;

  ngOnInit() {}

  onTest() {
    //create a synth and connect it to the master output (your speakers)
    this.synth = new Tone.Synth().toMaster();

    this.synth.triggerAttackRelease(440, 2);
    this.synth.triggerAttackRelease(500, '2n', '+3');
  }
}
