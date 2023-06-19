import { Obstacle } from "./Obstacle";
import { Position } from "../Geometry/Position";
import { Point } from "../Geometry/Point";

export class Planet {
  private readonly _width: number;
  private readonly _height: number;
  private readonly _obstacles: Array<Obstacle>;

  constructor(width: number, height: number, obstacles: Array<Obstacle>) {
    this._width = width;
    this._height = height;
    this._obstacles = obstacles;
  }

  normalize(point: Point): Point {
    return point.normalize(this._width, this._height);
  }

  hasObstacles(position: Position): boolean {
    return this._obstacles.some((obs: Obstacle) => obs.hasObstacle(position));
  }

  getSize() {
    return { width: this._width, height: this._height };
  }
}
