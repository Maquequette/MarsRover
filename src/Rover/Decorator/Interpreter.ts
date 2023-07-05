import { Actions } from "../Enum/Actions";
import { RoverInterface } from "../Interface/RoverInterface";
import { State } from "../State";

export class Interpreter implements RoverInterface {
  private readonly _rover: RoverInterface;

  constructor(rover: RoverInterface) {
    this._rover = rover;
  }

  public interpret(commands: string): Array<State> {
    const arrayCommands = commands.split("");

    return arrayCommands.map((command: string): State => {
      switch (command) {
        case "F":
          return this.moveForward();
        case "B":
          return this.moveBackward();
        case "R":
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
