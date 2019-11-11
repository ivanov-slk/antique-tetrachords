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
    // let synth = new Tone.Synth().toMaster();
    // synth.triggerAttackRelease(440, 2);
    // this.synth.triggerAttackRelease(500, '2n', '+3');
    // var pattern = new Tone.Part(
    //   function(time, note) {
    //     synth.triggerAttackRelease(note, '4n', time);
    //   },
    //   ['C2', 'D4', 'E5', 'A6'],
    //   'upDown'
    // ).start(0);
    // Tone.Transport.start('+0.1');
    // Tone.Transport.stop(10);
    // const synthPart = new Tone.Sequence(
    //   function(time, note) {
    //     synth.triggerAttackRelease(note, '10hz', time);
    //   },
    //   ['C4', 'D4', 'E4', 'A4'],
    //   '8n'
    // );
    // synthPart.start();
    // Tone.Transport.start();
    // Tone.Transport.loop = false;
    // console.log(Tone.Transport.loop);
    // // Setup Synth
    // var synth = new Tone.PluckSynth({
    //   attackNoise: 30,
    //   dampening: 1000,
    //   resonance: 0.9,
    //   volume: -10
    // }).toMaster();
    // // Sequence
    // var seq = new Tone.Sequence(
    //   function(time, note) {
    //     // Version 1: Straight 8s out of time
    //     // synth.triggerAttackRelease(note, "8n");
    //     // Version 2: Straight 8s in time
    //     synth.triggerAttackRelease(note, '16n', time);
    //   },
    //   ['c2', 'c2', 'e3', 'e3'],
    //   '8n'
    // ).start();
    // Tone.Transport.bpm.value = 120;
  }
}
