import { Planet } from "../Model/Planet";
import { Point } from "./Point";

export class Position {
  private readonly _point: Point;
  private readonly _planet: Planet;

  constructor(point: Point, planet: Planet) {
    this._point = planet.normalize(point);
    this._planet = planet;
  }

  incrementLatitudeIfAvailable(): Position {
    return this.goIfValidPosition(
      new Position(this._point.incrementLatitude(), this._planet)
    );
  }

  decrementLatitudeIfAvailable(): Position {
    return this.goIfValidPosition(
      new Position(this._point.decrementLatitude(), this._planet)
    );
  }

  incrementLongitudeIfAvailable(): Position {
    return this.goIfValidPosition(
      new Position(this._point.incrementLongitude(), this._planet)
    );
  }

  decrementLongitudeIfAvailable(): Position {
    return this.goIfValidPosition(
      new Position(this._point.decrementLongitude(), this._planet)
    );
  }

  isSamePosition(position: Position) {
    return position._point.isSamePoint(this._point);
  }

  normalize(width: number, height: number): Point {
    return this._point.normalize(width, height);
  }

  goIfValidPosition(position: Position) {
    if (!this._planet.hasObstacles(position)) {
      return position;
    }
    return this;
  }
}
