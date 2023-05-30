import { Coordinates } from "./Coordinates";
import { Orientation } from "./Orientation";
import { Planet } from "./Planet";
export class Rover {
  private position: Coordinates;
  private orientation: Orientation;
  private planet: Planet;

  constructor(orientation: Orientation, position: Coordinates, planet: Planet) {
    this.position = position;
    this.orientation = orientation;
    this.planet = planet;
  }

  public getPosition(): Coordinates {
    return this.position;
  }

  public getOrientation(): Orientation {
    return this.orientation;
  }

  public turn(degree: Orientation): void {
    this.orientation.setValue(this.orientation.getValue() + degree.getValue());
  }

  public move(): void {
    switch (this.orientation.getValue()) {
      case 90 || -270:
        if (
          this.planet.isValidPosition(
            this.position.getX() + 1,
            this.position.getY()
          )
        ) {
          this.position.setX(this.position.getX() + 1);
        } else {
          this.position.setX(0);
        }
        break;

      case 180 || -180:
        if (
          this.planet.isValidPosition(
            this.position.getX(),
            this.position.getY() - 1
          )
        ) {
          this.position.setY(this.position.getY() - 1);
        } else {
          this.position.setY(0);
        }
        break;

      case 270 || -90:
        if (
          this.planet.isValidPosition(
            this.position.getX(),
            this.position.getY() - 1
          )
        ) {
          this.position.setX(this.position.getX() - 1);
        } else {
          this.position.setX(this.planet.getSize().width);
        }
        break;

      case 360 || 0 || -360:
        if (
          this.planet.isValidPosition(
            this.position.getX(),
            this.position.getY() + 1
          )
        ) {
          this.position.setY(this.position.getY() + 1);
        } else {
          this.position.setY(this.planet.getSize().height);
        }
        this.orientation.setValue(0);

        break;
    }

    console.log(this.position);
  }
}
