import { Coordinate } from "./Coordinate";
import { Point } from "./Point";

export class Size {
  private _height: Coordinate;
  private _width: Coordinate;

  constructor(width: Coordinate, height: Coordinate) {
    this._height = height;
    this._width = width;
  }

  getMaxPoint(): Point {
    return new Point(this._width, this._height);
  }
}
