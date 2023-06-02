import { Coordinates } from "./Coordinates";
import { Orientation } from "../Enum/Orientation";
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

  private setPosition(position: Coordinates) {
    if (this.planet.hasObstacle(position)) {
      console.log("OBSTACLE !!!");
      console.log(this.position);
    } else {
      this.position = position;
      console.log(position);
    }
  }

  turnLeft() {
    this.orientation = this.orientation.RotationAntihoraire();
  }

  turnRight() {
    this.orientation = this.orientation.RotationHoraire();
  }

  moveForward() {
    this.setPosition(
      this.planet.normalize(this.position.moveForward(this.orientation))
    );
  }

  movebackward() {
    this.setPosition(
      this.planet.normalize(this.position.moveBackward(this.orientation))
    );
  }
}
