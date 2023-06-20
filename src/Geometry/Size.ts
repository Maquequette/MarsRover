import { Coordinate } from "./Coordinate";

export class Size {
  private readonly _value: number;

  constructor(value: number) {
    this._value = value;
  }

  public normalize(value: number): Coordinate {
    return new Coordinate( (((value % this._value) % -this._value) + this._value) % this._value );
  }
}
