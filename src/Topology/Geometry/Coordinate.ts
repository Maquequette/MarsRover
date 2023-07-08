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

  public substract(coordinate: Coordinate): Coordinate {
    return new Coordinate(this._value - coordinate._value);
  }

  public add(coordinate: Coordinate): Coordinate {
    return new Coordinate(this._value + coordinate._value);
  }

  public equal(coordinate: Coordinate): boolean {
    return this._value === coordinate._value;
  }
}
