import { Injectable } from '@angular/core';

import * as Tone from 'tone';
import { Subject } from 'rxjs';
import { Melody } from './melody.model';

export interface MelodyData {
  name: string;
  factors: number[];
  cents: number[];
  frequencies: number[];
}

@Injectable()
export class SynthService {
  synth: any;
  baseFrequency: number = 250;
  melodyDataEmitter = new Subject<MelodyData>();

  constructor() {
    this.synth = new Tone.Synth().toMaster();
  }

  private calculateMelodyData(melody: Melody): MelodyData {
    // parse the ratios
    const factors = melody.ratios.map(element => {
      let numerator: string;
      let denominator: string;
      [numerator, denominator] = element.split('/');
      return +numerator / +denominator;
    });

    // calculate the cents
    const cents = factors.map(element => {
      return 1200 * Math.log2(element);
    });

    // calculate the frequencies
    let frequencies: number[] = [this.baseFrequency];
    let tempFreq = this.baseFrequency;
    let newTempFreq: number;
    for (let i = 0; i < cents.length; i++) {
      newTempFreq = tempFreq * 2 ** (cents[i] / 1200);
      frequencies.push(newTempFreq);
      tempFreq = newTempFreq;
    }

    return {
      name: melody.name,
      factors,
      cents,
      frequencies //shorthand notation
    };
  }

  private playMelody(frequencies: number[]) {
    let synth = new Tone.Synth().toMaster();
    const patternName = 'up';

    let pattern = new Tone.Pattern(
      function(time, note) {
        //the order of the notes passed in depends on the pattern
        synth.triggerAttackRelease(note, '4n', time);
      },
      frequencies,
      patternName
    );
    pattern.iterations = frequencies.length;
    pattern.start();
    Tone.Transport.bpm.value = 120;
    Tone.Transport.start('+0.1');
  }

  handleMelody(melody: Melody) {
    const melodyData = this.calculateMelodyData(melody);
    this.playMelody(melodyData.frequencies);
    this.melodyDataEmitter.next(melodyData);
  }
}
