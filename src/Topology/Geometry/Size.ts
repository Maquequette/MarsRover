import { Planet } from "../Planet/Planet";
import { Coordinate } from "./Coordinate";
import { Point } from "./Point";

export class Size {
  private _height: Coordinate;
  private _width: Coordinate;

  constructor(width: Coordinate, height: Coordinate) {
    this._height = height;
    this._width = width;
  }

  normalize(point: Point) {
    return point.normalize(this._height, this._width);
  }
}
