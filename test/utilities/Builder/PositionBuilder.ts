import { Coordinate } from "../../../src/Topology/Geometry/Coordinate";
import { Planet } from "../../../src/Topology/Planet/Planet";
import { Position } from "../../../src/Topology/Geometry/Position";
import { Point } from "../../../src/Topology/Geometry/Point";

export class PositionBuilder {
  private readonly _latitude: Coordinate;
  private readonly _longitude: Coordinate;
  private readonly _planet: Planet;

  constructor(latitude: number, longitude: number, planet: Planet) {
    this._latitude = new Coordinate(latitude);
    this._longitude = new Coordinate(longitude);
    this._planet = planet;
  }

  build(): Position {
    return new Position(
      new Point(this._latitude, this._longitude),
      this._planet
    );
  }
}
