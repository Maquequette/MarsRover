import { Actions } from "../Enum/Actions";
import { Rover } from "./Rover";
export class Remote {
  private rover: Rover;

  constructor(rover: Rover) {
    this.rover = rover;
  }

  public setActions(actions: Array<Actions>) {
    actions.map((action: Actions) => {
      switch (action) {
        case Actions.MoveBackward:
          this.rover.movebackward();
          break;
        case Actions.MoveForward:
          this.rover.moveForward();
          break;
        case Actions.TurnLeft:
          this.rover.turnLeft();
          break;
        case Actions.TurnRight:
          this.rover.turnRight();
          break;
      }
    });
  }
}
