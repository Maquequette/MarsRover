import { Orientation } from "../Topology/Geometry/Enum/Orientation";
import { Position } from "../Topology/Geometry/Position";
import { RoverInterface } from "./Interface/RoverInterface";
import { State } from "./State";

export class Rover implements RoverInterface {
  private _state: State | undefined;
  private _previousState: State | undefined;
  static _landingError: Error = new Error("The rover has not landed");

  land(orientation: Orientation, position: Position): State {
    this._state = new State(orientation, position);
    this._previousState = new State(orientation, position);
    return new State(orientation, position);
  }

  turnLeft(): State | Error {
    this._previousState = this._state;
    this._state = this._state?.counterClockwiseRotation();
    return this._state || Rover._landingError;
  }

  turnRight(): State | Error {
    this._previousState = this._state;
    this._state = this._state?.clockwiseRotation();
    return this._state || Rover._landingError;
  }

  moveForward(): State | Error {
    this._previousState = this._state;
    this._state = this._state?.moveForward();
    return this._state || Rover._landingError;
  }

  moveBackward(): State | Error {
    this._previousState = this._state;
    this._state = this._state?.moveBackward();
    return this._state || Rover._landingError;
  }

  goBack(): State | Error {
    this._state = this._previousState;
    return this._state || Rover._landingError;
  }
}
