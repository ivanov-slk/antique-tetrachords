import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

// import ru from '/home/slav/Документи/Книги/Мои/Angular/antique-tetrachords/src/assets/i18n/ru.json';

interface TranslationTokens {
  title: string;
}

@Injectable({
  providedIn: "root"
})
export class TranslateService {
  data = {};

  constructor(private http: HttpClient) {}

  use(lang: string) {
    if (lang === "en") {
      this.data = en;
    } else if (lang === "ru") {
      this.data = ru;
    }
  }

  // use(lang: string): Promise<{}> {
  //   return new Promise<{}>((resolve, reject) => {
  //     const langPath = `assets/i18n/${lang || 'ru'}.json`;

  //     this.http.get<{}>(langPath).subscribe(
  //       translation => {
  //         this.data = Object.assign({}, translation || {});
  //         resolve(this.data);
  //       },
  //       error => {
  //         this.data = {};
  //         resolve(this.data);
  //       }
  //     );
  //   });
  // }
}

const en = {
  title: "Antique Tetrachords",
  temperedDur: "Tempered Dur",
  temperedMoll: "Tempered Moll",
  architesEnharmonic: "Archites - Enharmonic",
  eratosthenesEnharmonic: "Eratosthenes - Enharmonic",
  didimesEnharmonic: "Didimes - Enharmonic",
  ptolemyEnharmonic: "Ptolemy - Enharmonic",
  architesChromatic: "Archites - Chromatic",
  eratosthenesChromatic: "Eratosthenes - Chromatic",
  didimesChromatic: "Didimes - Chromatic",
  ptolemyChromatic: "Ptolemy - Chromatic",
  ptolemyChromatic2: "Ptolemy - Chromatic (2)",
  architesDiatonic: "Archites - Diatonic",
  eratosthenesDiatonic: "Eratosthenes - Diatonic",
  didimesDiatonic: "Didimes - Diatonic",
  ptolemyDiatonicSoft: "Ptolemy - Diatonic - Soft",
  ptolemyDiatonicTonic: "Ptolemy - Diatonic - Tonic",
  ptolemyDiatonicHard: "Ptolemy - Diatonic - Hard",
  ptolemyDiatonicFlat: "Ptolemy - Diatonic - Flat",
  ptolemyDiatonicDouble: "Ptolemy - Diatonic - Double",
  chart__title: "Comparison of tetrachords' intervals",
  chart__legend: "Interval",
  antique: "Antique",
  byzantine: "Byzantine",
  voiceI: "First voice",
  voiceII: "Second voice",
  voiceIII: "Third voice",
  voiceIVlegetos: "Fourth voice - legetos",
  voiceIVagiaFromPa: "Fourth voice - agia from Pa",
  voiceIVagiaFromDi: "Fourth voice - agia from Di",
  voiceIVchromatic: "Fourth voice - chromatic",
  voiceV: "Fifth voice",
  voiceVI: "Sixth voice",
  voiceVIIenharmonic: "Seventh voice - enharmonic",
  voiceVIItetraphonos: "Seventh voice - tetraphonos",
  voiceVIII: "Eighth voice"
};

const ru = {
  title: "Античные тетрахорды",
  temperedDur: "Темперированный - мажор",
  temperedMoll: "Темперированный - минор",
  architesEnharmonic: "Архит - энгармонический",
  eratosthenesEnharmonic: "Эратосфэн - энгармонический",
  didimesEnharmonic: "Дидим - энгармонический",
  ptolemyEnharmonic: "Птолемей - энгармонический",
  architesChromatic: "Архит - хроматический",
  eratosthenesChromatic: "Эратосфен - хроматический",
  didimesChromatic: "Дидим - хроматический",
  ptolemyChromatic: "Птолемей - хроматический",
  ptolemyChromatic2: "Птолемей - хроматический (2)",
  architesDiatonic: "Архит - диатонический",
  eratosthenesDiatonic: "Эратосфен - диатонический",
  didimesDiatonic: "Дидим - диатонический",
  ptolemyDiatonicSoft: "Птолемей - диатонический - мягкий",
  ptolemyDiatonicTonic: "Птолемей - диатонический - тоновой",
  ptolemyDiatonicHard: "Птолемей - диатонический - напряженный",
  ptolemyDiatonicFlat: "Птолемей - диатонический - ровный",
  ptolemyDiatonicDouble: "Птолемей - диатонический - двухтоновой",
  chart__title: "Сравнение тетрахордных интервалов",
  chart__legend: "Интервал",
  antique: "Античные",
  byzantine: "Византийские",
  voiceI: "Глас первый",
  voiceII: "Глас второй",
  voiceIII: "Глас третий",
  voiceIVlegetos: "Глас четвертый - легетос",
  voiceIVagiaFromPa: "Глас четвертый - агия - па",
  voiceIVagiaFromDi: "Глас четвертый - агия - ди",
  voiceIVchromatic: "Глас четвертый - хроматический",
  voiceV: "Глас пятый",
  voiceVI: "Глас шестой",
  voiceVIIenharmonic: "Глас седмой - энгармонический",
  voiceVIItetraphonos: "Глас седмой - тетрафонос",
  voiceVIII: "Глас восьмой"
};
