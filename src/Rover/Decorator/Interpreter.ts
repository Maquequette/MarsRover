import { Orientation } from "../../Topology/Geometry/Enum/Orientation";
import { Position } from "../../Topology/Geometry/Position";
import { Actions } from "../Enum/Actions";
import { RoverInterface } from "../Interface/RoverInterface";
import { Rover } from "../Rover";
import { State } from "../State";

export class Interpreter implements RoverInterface {
  private readonly _rover: RoverInterface;

  constructor(rover: RoverInterface) {
    this._rover = rover;
  }

  land(orientation: Orientation, position: Position): State {
    return this._rover.land(orientation, position);
  }

  public interpret(commands: any): Array<State | Error> {
    const arrayCommands: Array<Actions> = commands.split("");

    return arrayCommands.map((command: Actions): State | Error => {
      switch (command) {
        case Actions.MoveForward:
          return this.moveForward();
        case Actions.MoveBackward:
          return this.moveBackward();
        case Actions.TurnRight:
          return this.turnRight();
        case Actions.TurnLeft:
          return this.turnLeft();
        default:
          return Rover._landingError;
      }
    });
  }

  turnRight(): Error | State {
    return this._rover.turnRight() || Rover._landingError;
  }

  turnLeft(): Error | State {
    return this._rover.turnLeft() || Rover._landingError;
  }

  moveForward(): Error | State {
    return this._rover.moveForward() || Rover._landingError;
  }

  moveBackward(): Error | State {
    return this._rover.moveBackward() || Rover._landingError;
  }

  goBack(): Error | State {
    return this._rover.goBack() || Rover._landingError;
  }
}
