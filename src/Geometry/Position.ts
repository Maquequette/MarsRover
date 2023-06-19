export class Position {
  private readonly _latitude: number;
  private readonly _longitude: number;

  constructor(latitude: number, longitude: number) {
    this._latitude = latitude == -0 ? 0 : latitude;
    this._longitude = longitude == -0 ? 0 : longitude;
  }

  incrementLatitude(): Position {
    return new Position(this._latitude + 1, this._longitude);
  }

  decrementLatitude(): Position {
    return new Position(this._latitude - 1, this._longitude);
  }

  incrementLongitude(): Position {
    return new Position(this._latitude, this._longitude + 1);
  }

  decrementLongitude(): Position {
    return new Position(this._latitude, this._longitude - 1);
  }

  isSamePosition(position: Position) {
    return (
      position._latitude === this._latitude &&
      position._longitude === this._longitude
    );
  }

  normalize(width: number, height: number) {
    const longitude = ((this._longitude % width) % -width) + width;
    const latitude = ((this._latitude % height) % -height) + height;

    return new Position(longitude, latitude);
  }
}
