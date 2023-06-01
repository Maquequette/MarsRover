import { Coordinates } from "./Coordinates";
import { Orientation } from "../Enum/Orientation";
import { Planet } from "./Planet";
import { Actions } from "../Enum/Actions";
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

  public setActions(actions: Array<Actions>) {
    actions.map((action: Actions) => {
      switch (action) {
        case Actions.MoveBackward:
          this.movebackward();
          break;
        case Actions.MoveForward:
          this.moveForward();
          break;
        case Actions.TurnLeft:
          this.turnLeft();
          break;
        case Actions.TurnRight:
          this.turnRight();
          break;
      }
    });
  }
}
