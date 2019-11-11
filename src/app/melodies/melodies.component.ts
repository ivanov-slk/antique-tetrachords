import { Component, OnInit } from '@angular/core';
import { MelodyService } from './melody.service';
import { SynthService } from './synth.service';

@Component({
  selector: 'app-melodies',
  templateUrl: './melodies.component.html',
  styleUrls: ['./melodies.component.css'],
  providers: [MelodyService, SynthService]
})
export class MelodiesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
