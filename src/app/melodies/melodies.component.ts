import { Component, OnInit } from "@angular/core";
import { MelodyService } from "./melody.service";
import { SynthService } from "./synth.service";
import { TranslatePipe } from "../shared/translate.pipe";

@Component({
  selector: "app-melodies",
  templateUrl: "./melodies.component.html",
  styleUrls: ["./melodies.component.css"],
  providers: [MelodyService, TranslatePipe]
})
export class MelodiesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
