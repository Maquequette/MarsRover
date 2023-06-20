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
    return new Point(this._latitude, this._longitude.add());
  }

  public decrementLongitude(): Point {
    return new Point(this._latitude, this._longitude.substract());
  }

  public incrementLatitude(): Point {
    return new Point(this._latitude.add(), this._longitude);
  }

  public decrementLatitude(): Point {
    return new Point(this._latitude.substract(), this._longitude);
  }

  public isSamePoint(point: Point): boolean {
    console.log(this._latitude, this._longitude, point._latitude, point._longitude)
    console.log(this._latitude === point._latitude && this._longitude === point._longitude)
    return (
      this._latitude === point._latitude && this._longitude === point._longitude
    );
  }
}
