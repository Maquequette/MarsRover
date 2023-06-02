import { Coordinates } from "./Coordinates";
import { Orientation } from "../Enum/Orientation";
import { Planet } from "./Planet";
import { Messager } from "../Model/Messager";
import { ObstacleError } from "../Error/ObstacleError";

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
      new Messager("Obstacle");
      throw new ObstacleError("bip bop !! nop");
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
