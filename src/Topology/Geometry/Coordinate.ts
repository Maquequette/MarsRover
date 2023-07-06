export class Coordinate {
  private readonly _value: number;

  constructor(value: number) {
    this._value = value;
  }

  public normalize(coordinate: Coordinate): Coordinate {
    return new Coordinate(
      (((this._value % coordinate._value) % -coordinate._value) +
        coordinate._value) %
        coordinate._value
    );
  }

  public substract(): Coordinate {
    return new Coordinate(this._value - 1);
  }

  public add(): Coordinate {
    return new Coordinate(this._value + 1);
  }

  public equal(coordinate: Coordinate): boolean {
    return this._value === coordinate._value;
  }
}
