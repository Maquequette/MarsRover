import { Position } from "../Geometry/Position";

export class Obstacle {
  private readonly _position: Position;

  constructor(position: Position) {
    this._position = position;
  }

  hasObstacle(position: Position): boolean {
    return this._position.isSamePosition(position);
  }
}
