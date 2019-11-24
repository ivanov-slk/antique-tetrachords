import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { SynthService } from "../melodies/synth.service";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.css"]
})
export class SettingsComponent implements OnInit {
  @ViewChild("f", { static: true }) settingsForm: NgForm;

  constructor(private synthService: SynthService) {}

  ngOnInit() {
    setTimeout(() => {
      this.settingsForm.setValue({
        freq: this.synthService.baseFrequency,
        bpm: this.synthService.beatsPerMinute
      });
    });
  }

  onSubmit() {
    this.synthService.setParameters(
      this.settingsForm.value.freq,
      this.settingsForm.value.bpm
    );
  }
}
