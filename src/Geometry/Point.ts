import { Coordinate } from "./Coordinate";
import { Size } from "./Size";

export class Point {
  private readonly _latitude: Coordinate;
  private readonly _longitude: Coordinate;

  constructor(latitude: Coordinate, longitude: Coordinate) {
    this._latitude = latitude;
    this._longitude = longitude;
  }

  public normalize(width: Size, height: Size): Point {
    return new Point(
      this._latitude.normalize(width),
      this._longitude.normalize(height)
    );
  }

  public incrementLongitude(): Point {
    return new Point(this._latitude.add(), this._longitude);
  }

  public decrementLongitude(): Point {
    return new Point(this._latitude.substract(), this._longitude);
  }

  public incrementLatitude(): Point {
    return new Point(this._latitude, this._longitude.add());
  }

  public decrementLatitude(): Point {
    return new Point(this._latitude, this._longitude.substract());
  }

  public add(point: Point): Point {
    return new Point(this._latitude.add(), this._longitude.add());
  }

  public isSamePoint(point: Point): boolean {
    return (
      this._latitude === point._latitude && this._longitude === point._longitude
    );
  }
}
