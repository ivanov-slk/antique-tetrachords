import { Injectable } from '@angular/core';

import * as Tone from 'tone';

@Injectable()
export class SynthService {
  synth: any;

  constructor() {
    this.synth = new Tone.Synth().toMaster();
  }

  playMelody(freqs: number[] | string[]) {
    let synth = new Tone.Synth().toMaster();
    const patternName = 'up';

    let pattern = new Tone.Pattern(
      function(time, note) {
        //the order of the notes passed in depends on the pattern
        synth.triggerAttackRelease(note, '4n', time);
      },
      freqs,
      patternName
    );
    pattern.iterations = freqs.length;
    pattern.start();
    Tone.Transport.start('+0.1');
  }

  playCMajorScale() {
    let synth = new Tone.Synth().toMaster();
    const myScale = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5'];
    const patternName = 'up';

    let pattern = new Tone.Pattern(
      function(time, note) {
        //the order of the notes passed in depends on the pattern
        synth.triggerAttackRelease(note, '4n', time);
      },
      myScale,
      patternName
    );
    pattern.iterations = myScale.length;
    pattern.start();
    Tone.Transport.start('+0.1');
  }
}
