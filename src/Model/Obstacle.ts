import { Point } from "../Geometry/Point";
import { Position } from "../Geometry/Position";

export class Obstacle {
  private readonly _point: Point;

  constructor(point: Point) {
    this._point = point;
  }

  hasObstacle(point: Point): boolean {
    return this._point.isSamePoint(point);
  }
}
