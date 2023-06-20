import { Obstacle } from "./Obstacle";
import { Position } from "../Geometry/Position";
import { Planet } from "./Planet";
import { Size } from "../Geometry/Size";

export class PlanetWithObstacles extends Planet {
  private readonly _obstacles: Array<Obstacle>;

  constructor(width: Size, height: Size, obstacles: Array<Obstacle>) {
    super(width, height, true);
    this._obstacles = obstacles;
  }

  hasObstacles(position: Position): boolean {
    console.log('ici');
    return this._obstacles.some((obs: Obstacle) => obs.hasObstacle(position));
  }
}
