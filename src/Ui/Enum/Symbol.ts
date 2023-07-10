export class Symbol {
  static West: Symbol = new Symbol("←");
  static RoveNorth: Symbol = new Symbol("↑");
  static Est: Symbol = new Symbol("→");
  static South: Symbol = new Symbol("↓");
  static Obstacle: Symbol = new Symbol("O");
  static Nothing: Symbol = new Symbol("*");

  private readonly _representation: string;

  private constructor(representation: string) {
    this._representation = representation;
  }

  public toString(): string {
    return this._representation;
  }
}
