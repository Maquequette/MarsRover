import { Planet } from "../Model/Planet";
import { Coordinate } from "./Coordinate";
import { Point } from "./Point";
import { Position } from "./Position";

export class Size {
  private _height: Coordinate;
  private _width: Coordinate;

  constructor(width: Coordinate, height: Coordinate) {
    this._height = height;
    this._width = width;
  }

  getPointMax(): Point {
    return new Point(this._width, this._height);
  }
}
