import { Injectable } from '@angular/core';

import * as Tone from 'tone';

@Injectable()
export class SynthService {
  synth: any;
  baseFrequency: number = 250;

  constructor() {
    this.synth = new Tone.Synth().toMaster();
  }

  private calculateFrequencies(ratios: string[]): number[] {
    // parse the ratios
    const factors = ratios.map(element => {
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
    let freqs: number[] = [this.baseFrequency];
    let tempFreq = this.baseFrequency;
    let newTempFreq: number;
    for (let i = 0; i < cents.length; i++) {
      newTempFreq = tempFreq * 2 ** (cents[i] / 1200);
      freqs.push(newTempFreq);
      tempFreq = newTempFreq;
    }
    console.log(cents);
    console.log(cents.reduce((accumulator, value) => accumulator + value));
    console.log(freqs);
    return freqs;
  }

  playMelody(melodyRatios: string[]) {
    const frequencies = this.calculateFrequencies(melodyRatios);
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
