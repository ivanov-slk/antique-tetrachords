import { Component, OnInit, Input } from "@angular/core";
import { MelodyService } from "../melody.service";
import { Melody } from "../melody.model";

@Component({
  selector: "app-melody-list",
  templateUrl: "./melody-list.component.html",
  styleUrls: ["./melody-list.component.css"]
})
export class MelodyListComponent implements OnInit {
  melodies: Melody[];
  melodyGroup: string;

  constructor(private melodyService: MelodyService) {}

  ngOnInit() {
    this.melodyGroup = "antique";
    this.melodies = this.melodyService.getMelodies(this.melodyGroup);
  }

  setMelodyGroup(value: string) {
    this.melodyGroup = value;
    this.melodies = this.melodyService.getMelodies(value);
  }
}
