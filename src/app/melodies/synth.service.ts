import { Injectable } from "@angular/core";

import * as Tone from "tone";
import { Subject } from "rxjs";
import { Melody } from "./melody.model";

export interface MelodyData {
  name: string;
  cents: number[];
  frequencies: number[];
}

@Injectable()
export class SynthService {
  synth: any;
  baseFrequency: number = 250;
  beatsPerMinute: number = 120;
  melodyDataEmitter = new Subject<MelodyData>();
  readonly totalCents = 498.044999134612; // the total cents in a tetrachord
  readonly totalUnits = 30; // the total units in a byzantine tetrachord

  constructor() {
    this.synth = new Tone.Synth().toMaster();
  }

  private calculateCents(melody: Melody): number[] {
    const cents = melody.ratios.map(element => {
      let intervalInCents: number;
      if (typeof element === "string") {
        let numerator: string;
        let denominator: string;
        [numerator, denominator] = element.split("/");
        const ratio = +numerator / +denominator;
        intervalInCents = 1200 * Math.log2(ratio);
      } else if (typeof element === "number") {
        intervalInCents = this.totalCents * (element / this.totalUnits);
      }
      return intervalInCents;
    });
    return cents;
  }

  private calculateMelodyData(melody: Melody): MelodyData {
    // // parse the ratios
    // const factors = melody.ratios.map(element => {
    //   let numerator: string;
    //   let denominator: string;
    //   [numerator, denominator] = element.split("/");
    //   return +numerator / +denominator;
    // });

    // // calculate the cents
    // const cents = factors.map(element => {
    //   return 1200 * Math.log2(element);
    // });
    const cents = this.calculateCents(melody);
    console.log(cents.reduce((a, b) => (a = a + b)));

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
      cents,
      frequencies //shorthand notation
    };
  }

  private playMelody(frequencies: number[]) {
    let synth = new Tone.Synth().toMaster();
    const patternName = "up";

    let pattern = new Tone.Pattern(
      function(time, note) {
        //the order of the notes passed in depends on the pattern
        synth.triggerAttackRelease(note, "4n", time);
      },
      frequencies,
      patternName
    );
    pattern.iterations = frequencies.length;
    pattern.start();
    Tone.Transport.bpm.value = this.beatsPerMinute;
    Tone.Transport.start("+0.1");
  }

  handleMelody(melody: Melody) {
    const melodyData = this.calculateMelodyData(melody);
    this.playMelody(melodyData.frequencies);
    this.melodyDataEmitter.next(melodyData);
  }

  setParameters(freq: number, bpm: number) {
    if (freq) {
      this.baseFrequency = freq;
    }
    if (bpm) {
      this.beatsPerMinute = bpm;
    }
  }
}
