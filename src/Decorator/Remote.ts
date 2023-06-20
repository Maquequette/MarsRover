import { Actions } from "../Enum/Actions";
import { Rover } from "../Model/Rover";
import { State } from "../Model/State";

export class Remote {
  private readonly _rover: Rover;

  constructor(rover: Rover) {
    this._rover = rover;
  }

  public setActions(actions: Array<Actions>): Array<State> {
    return actions.map((action: Actions): State => {
      switch (action) {
        case Actions.MoveBackward:
          return this._rover.moveBackward();
          
        case Actions.MoveForward:
          return this._rover.moveForward();
          
        case Actions.TurnLeft:
          return this._rover.turnLeft();
          
        case Actions.TurnRight:
          return this._rover.turnRight();
      }
    });
  }
}
