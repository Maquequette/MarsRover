import { Size } from "../Geometry/Size";
import { Point } from "../Geometry/Point";

export class Planet {
  protected readonly _size: Size;

  constructor(size: Size) {
    this._size = size;
  }

  normalize(point: Point): Point {
    return point.normalize(this._size.getMaxPoint());
  }

  hasObstacles(point: Point): boolean {
    return false;
  }
}
