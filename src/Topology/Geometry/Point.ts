import { Coordinate } from "./Coordinate";
import { Size } from "./Size";

export class Point {
  private readonly _latitude: Coordinate;
  private readonly _longitude: Coordinate;

  constructor(latitude: Coordinate, longitude: Coordinate) {
    this._latitude = latitude;
    this._longitude = longitude;
  }

  public normalize(height: Coordinate, width: Coordinate): Point {
    return new Point(
      this._latitude.normalize(height),
      this._longitude.normalize(width)
    );
  }

  public incrementLongitude(): Point {
    return new Point(this._latitude, this._longitude.add(new Coordinate(1)));
  }

  public decrementLongitude(): Point {
    return new Point(
      this._latitude,
      this._longitude.substract(new Coordinate(1))
    );
  }

  public incrementLatitude(): Point {
    return new Point(this._latitude.add(new Coordinate(1)), this._longitude);
  }

  public decrementLatitude(): Point {
    return new Point(
      this._latitude.substract(new Coordinate(1)),
      this._longitude
    );
  }

  public isSamePoint(point: Point): boolean {
    return (
      this._latitude.equal(point._latitude) &&
      this._longitude.equal(point._longitude)
    );
  }
}
