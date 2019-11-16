import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslateSyncService {
  changeEmitter = new Subject<any>(); // a rather clumsy way to do this...

  constructor() {}

  sync() {
    this.changeEmitter.next();
  }
}
