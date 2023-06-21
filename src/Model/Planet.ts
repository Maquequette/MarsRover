import { Size } from "../Geometry/Size";
import { Position } from "../Geometry/Position";
import { Point } from "../Geometry/Point";

export class Planet {
  protected readonly _size: Size;

  constructor(size: Size) {
    this._size = size;
  }

  normalize(point: Point): Point {
    return point.normalize(this._size.getPointMax());
  }

  hasObstacles(point: Point): boolean {
    return false;
  }
}
