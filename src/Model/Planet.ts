import { Obstacle } from "./Obstacle";
import { Position } from "../Geometry/Position";

export class Planet {
  private readonly _width: number;
  private readonly _height: number;
  private readonly _obstacles: Array<Obstacle>;

  constructor(width: number, height: number, obstacles: Array<Obstacle>) {
    this._width = width;
    this._height = height;
    this._obstacles = obstacles;
  }

  normalize(position: Position): Position {
    return position.normalize(this._width, this._height);
  }

  hasObstacle(position: Position): boolean {
    return this._obstacles.some((obs: Obstacle) =>
      obs.getPosition().isSamePosition(position)
    );
  }
}
