import { Size } from "../Geometry/Size";
import { Point } from "../Geometry/Point";
import { Coordinate } from "../Geometry/Coordinate";

export class Planet {
  protected readonly _size: Size;

  constructor(size: Size) {
    this._size = size;
  }

  public normalize(point: Point): Point {
    return this._size.normalize(point);
  }

  public hasObstacles(point: Point): boolean {
    return false;
  }

  getSize() {
    return this._size;
  }
}
