export class RoverSymbol {
  static West: RoverSymbol = new RoverSymbol("←");
  static RoveNorth: RoverSymbol = new RoverSymbol("↑");
  static Est: RoverSymbol = new RoverSymbol("→");
  static South: RoverSymbol = new RoverSymbol("↓");

  private readonly _representation: string;

  private constructor(representation: string) {
    this._representation = representation;
  }

  toString(): string {
    return this._representation;
  }
}
