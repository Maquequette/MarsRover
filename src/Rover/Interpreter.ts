import { Actions } from "./Enum/Actions";
import { RoverInterface } from "./Interface/RoverInterface";
import { State } from "./State";

export class Interpreter implements RoverInterface {
  private readonly _rover: RoverInterface;

  constructor(rover: RoverInterface) {
    this._rover = rover;
  }

  public interpret(commands: any): Array<State> {
    const arrayCommands: Array<Actions> = commands.split("");

    return arrayCommands.map((command: Actions): State => {
      switch (command) {
        case Actions.MoveForward:
          return this.moveForward();
        case Actions.MoveBackward:
          return this.moveBackward();
        case Actions.TurnRight:
          return this.turnRight();
        default:
          return this.turnLeft();
      }
    });
  }

  turnRight(): State {
    return this._rover.turnRight();
  }
  turnLeft(): State {
    return this._rover.turnLeft();
  }
  moveForward(): State {
    return this._rover.moveForward();
  }
  moveBackward(): State {
    return this._rover.moveBackward();
  }
}
