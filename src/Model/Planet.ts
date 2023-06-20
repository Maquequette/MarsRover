import { Size } from "../Geometry/Size";
import { Point } from "../Geometry/Point";
import { Position } from "../Geometry/Position";

export class Planet {
  private readonly _width: Size;
  private readonly _height: Size;

  constructor(width: Size, height: Size, hasObstacles: boolean) {
    this._width = width;
    this._height = height;
  }

  normalize(point: Point): Point {
    return point.normalize(this._width, this._height);
  }

  hasObstacles(position: Position): boolean {
    return false;
  }
}
