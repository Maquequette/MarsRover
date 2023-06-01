import { Orientation } from "../Enum/Orientation";
export class Coordinates {
  private x: number;
  private y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public getX(): number {
    return this.x;
  }

  public getY(): number {
    return this.y;
  }

  public setX(x: number): void {
    this.x = x;
  }

  public setY(y: number): void {
    this.y = y;
  }

  public setPosition(position: Coordinates) {
    this.setX(position.getX());
    this.setY(position.getY());
  }

  private incrementLongitude() {
    return new Coordinates((this.x += 1), this.y);
  }

  private decrementLongitude() {
    return new Coordinates((this.x -= 1), this.y);
  }

  private incrementLatitude() {
    return new Coordinates(this.x, (this.y += 1));
  }

  private decrementLatitude() {
    return new Coordinates(this.x, (this.y -= 1));
  }

  moveForward(orientation: Orientation) {
    let nPosition;
    switch (orientation) {
      case Orientation.North:
        nPosition = this.incrementLatitude();
        break;
      case Orientation.East:
        nPosition = this.incrementLongitude();
        break;
      case Orientation.South:
        nPosition = this.decrementLatitude();
        break;
      default:
        nPosition = this.decrementLongitude();
        break;
    }
    return nPosition;
  }

  moveBackward(orientation: Orientation) {
    let nPosition;
    switch (orientation) {
      case Orientation.North:
        nPosition = this.decrementLatitude();
        break;
      case Orientation.East:
        nPosition = this.decrementLongitude();
        break;
      case Orientation.South:
        nPosition = this.incrementLatitude();
        break;
      default:
        nPosition = this.incrementLongitude();
        break;
    }
    return nPosition;
  }
}
