export class Point {
  private readonly latitude: number;
  private readonly longitude: number;

  constructor(latitude: number, longitude: number) {
    this.latitude = latitude == -0 ? 0 : latitude;
    this.longitude = longitude == -0 ? 0 : longitude;
  }

  public normalize(width: number, height: number): Point {
    const Lng = ((this.longitude % width) % -width) + width;
    const Lat = ((this.latitude % height) % -height) + height;
    return new Point(Lat, Lng);
  }

  public incrementLongitude(): Point {
    return new Point(this.latitude + 1, this.longitude);
  }

  public decrementLongitude(): Point {
    return new Point(this.latitude - 1, this.longitude);
  }

  public incrementLatitude(): Point {
    return new Point(this.latitude, this.longitude + 1);
  }

  public decrementLatitude(): Point {
    return new Point(this.latitude, this.longitude - 1);
  }

  public add(point: Point): Point {
    return new Point(
      this.latitude + point.latitude,
      this.longitude + point.longitude
    );
  }

  public isSamePoint(point: Point): boolean {
    return (
      this.latitude === point.latitude && this.longitude === point.longitude
    );
  }
}
