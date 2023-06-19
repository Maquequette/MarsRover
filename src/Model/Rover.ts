import { Orientation } from "../Enum/Orientation";
import { Position } from "../Geometry/Position";
import { State } from "./State";

export class Rover {
  private _state: State;

  constructor(orientation: Orientation, position: Position) {
    this._state = new State(orientation, position);
  }

  turnLeft() {
    this._state = this._state.counterClockwiseRotation();
    return this._state;
  }

  turnRight() {
    this._state = this._state.clockwiseRotation();
    return this._state;
  }

  moveForward() {
    this._state = this._state.moveForward();
    return this._state;
  }

  movebackward() {
    this._state = this._state.moveBackward();
    return this._state;
  }
}
