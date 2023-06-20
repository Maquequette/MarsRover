import { Size } from "./Size";

export class Coordinate {
  private readonly _value: number;

  constructor(value: number) {
    this._value = value;
  }

  public normalize(size: Size): Coordinate {
    return size.normalize(this._value);
  }

  public substract(): Coordinate {
    return new Coordinate(this._value - 1);
  }

  public add(): Coordinate {
    return new Coordinate(this._value + 1);
  }
}
