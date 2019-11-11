import { Component, OnInit } from '@angular/core';
import { MelodyService } from '../melody.service';
import { Melody } from '../melody.model';

@Component({
  selector: 'app-melody-list',
  templateUrl: './melody-list.component.html',
  styleUrls: ['./melody-list.component.css']
})
export class MelodyListComponent implements OnInit {
  melodies: Melody[];

  constructor(private melodyService: MelodyService) {}

  ngOnInit() {
    this.melodies = this.melodyService.getMelodies();
  }
}
