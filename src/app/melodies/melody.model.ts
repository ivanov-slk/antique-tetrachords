export class Melody {
  name: string;
  ratios: Array<string | number>;

  constructor(name: string, ratios: Array<string | number>) {
    this.name = name;
    this.ratios = ratios;
  }
}
