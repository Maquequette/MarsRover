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

  public normalize(point: Point) {
    return point.normalize(this._height, this._width);
  }

  public getHeight(): Coordinate {
    return this._height;
  }

  public getWidth(): Coordinate {
    return this._width;
  }
}
