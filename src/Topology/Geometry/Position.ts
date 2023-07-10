import { Point } from "./Point";
import { Planet } from "../Planet/Planet";
import { Visualizer } from "../../Ui/Visualizer";
import { Coordinate } from "./Coordinate";

export class Position {
  private readonly _point: Point;
  private readonly _planet: Planet;

  constructor(point: Point, planet: Planet) {
    this._point = planet.normalize(point);
    this._planet = planet;
  }

  public incrementLatitudeIfAvailable(): Position {
    return this.goIfValidPosition(
      new Position(this._point.incrementLatitude(), this._planet)
    );
  }

  public decrementLatitudeIfAvailable(): Position {
    return this.goIfValidPosition(
      new Position(this._point.decrementLatitude(), this._planet)
    );
  }

  public incrementLongitudeIfAvailable(): Position {
    return this.goIfValidPosition(
      new Position(this._point.incrementLongitude(), this._planet)
    );
  }

  public decrementLongitudeIfAvailable(): Position {
    return this.goIfValidPosition(
      new Position(this._point.decrementLongitude(), this._planet)
    );
  }

  public isSamePosition(position: Position): boolean {
    return position._point.isSamePoint(this._point);
  }

  public goIfValidPosition(position: Position) {
    if (!this._planet.hasObstacles(position._point)) {
      return position;
    }
    return this;
  }

  public getPlanet() {
    return this._planet;
  }
}
