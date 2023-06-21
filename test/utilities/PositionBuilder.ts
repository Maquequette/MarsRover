import { Coordinate } from "../../src/Geometry/Coordinate";
import { Point } from "../../src/Geometry/Point";
import { Position } from "../../src/Geometry/Position";
import { Planet } from "../../src/Model/Planet";

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
