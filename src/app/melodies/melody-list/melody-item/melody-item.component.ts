import { Component, OnInit, Input } from '@angular/core';
import { Melody } from '../../melody.model';
import { SynthService } from '../../synth.service';

@Component({
  selector: 'app-melody-item',
  templateUrl: './melody-item.component.html',
  styleUrls: ['./melody-item.component.css']
})
export class MelodyItemComponent implements OnInit {
  @Input() melody: Melody;
  isActive = false;

  constructor(private synthService: SynthService) {}

  ngOnInit() {}

  onPlay() {
    console.log('playing...');
    this.synthService.handleMelody(this.melody.ratios);
  }
}
