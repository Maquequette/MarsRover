import { Position } from "../Geometry/Position";
export class Obstacle {
  private readonly _position: Position;

  constructor(position: Position) {
    this._position = position;
  }

  public getPosition(): Position {
    return this._position;
  }
}
