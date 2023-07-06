import { Obstacle } from "../Obstacle";
import { Planet } from "./Planet";
import { Size } from "../Geometry/Size";
import { Point } from "../Geometry/Point";

export class PlanetWithObstacles extends Planet {
  private readonly _obstacles: Array<Obstacle>;

  constructor(size: Size, obstacles: Obstacle[] = []) {
    super(size);
    this._obstacles = obstacles;
  }

  hasObstacles(point: Point): boolean {
    return this._obstacles.some((obs: Obstacle) => obs.hasObstacle(point));
  }

  addObstacleAt(point: Point): Planet {
    this._obstacles.push(new Obstacle(point));
    return new PlanetWithObstacles(this._size, this._obstacles);
  }
}
