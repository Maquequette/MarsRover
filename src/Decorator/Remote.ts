import { Actions } from "../Enum/Actions";
import { Rover } from "../Model/Rover";

export class Remote {
  private readonly _rover: Rover;

  constructor(rover: Rover) {
    this._rover = rover;
  }

  public setActions(actions: Array<Actions>) {
    actions.map((action: Actions) => {
      switch (action) {
        case Actions.MoveBackward:
          this._rover.movebackward();
          break;
        case Actions.MoveForward:
          this._rover.moveForward();
          break;
        case Actions.TurnLeft:
          this._rover.turnLeft();
          break;
        case Actions.TurnRight:
          this._rover.turnRight();
          break;
      }
    });
  }
}
