import { Melody } from './melody.model';
import { Injectable } from '@angular/core';

@Injectable()
export class MelodyService {
  private melodies: Melody[] = [
    new Melody('architesEnharmonic', ['28/27', '36/35', '5/4']),
    new Melody('eratosthenesEnharmonic', ['40/39', '39/38', '19/15']),
    new Melody('didimesEnharmonic', ['32/31', '31/30', '5/4']),
    new Melody('ptolemyEnharmonic', ['46/45', '24/23', '5/4']),
    new Melody('architesChromatic', ['28/27', '243/224', '32/27']),
    new Melody('eratosthenesChromatic', ['20/19', '19/18', '6/5']),
    new Melody('didimesChromatic', ['16/15', '25/24', '6/5']),
    new Melody('ptolemyChromatic', ['28/27', '15/14', '6/5']),
    new Melody('ptolemyChromatic2', ['22/21', '12/11', '7/6']),
    new Melody('architesDiatonic', ['28/27', '8/7', '9/8']),
    new Melody('eratosthenesDiatonic', ['256/243', '9/8', '9/8']),
    new Melody('didimesDiatonic', ['16/15', '10/9', '9/8']),
    new Melody('ptolemyDiatonicSoft', ['21/20', '10/9', '8/7']),
    new Melody('ptolemyDiatonicTonic', ['28/27', '8/7', '9/8']),
    new Melody('ptolemyDiatonicHard', ['16/15', '9/8', '10/9']),
    new Melody('ptolemyDiatonicFlat', ['12/11', '11/10', '10/9']),
    new Melody('ptolemyDiatonicDouble', ['256/243', '9/8', '9/8'])
  ];

  getMelodies() {
    return this.melodies.slice();
  }
}
