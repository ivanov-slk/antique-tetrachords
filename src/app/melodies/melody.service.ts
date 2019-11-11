import { Melody } from './melody.model';
import { Injectable } from '@angular/core';

@Injectable()
export class MelodyService {
  private melodies: Melody[] = [
    new Melody('melody 1', ['E5', 'F5']),
    new Melody('melody 2', ['C4', 'A4'])
  ];

  getMelodies() {
    return this.melodies.slice();
  }
}
