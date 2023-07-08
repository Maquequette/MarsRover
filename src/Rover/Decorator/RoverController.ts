import { RoverInterface } from "../Interface/RoverInterface";
import { Interpreter } from "./Interpreter";
import { State } from "../State";
import { TransceiverPassive } from "../TransceiverPassive";
import { Orientation } from "../../Topology/Geometry/Enum/Orientation";
import { Position } from "../../Topology/Geometry/Position";

export class RoverController implements RoverInterface {
  private readonly _interpreter: Interpreter;
  private readonly _transceiver: TransceiverPassive;

  constructor(rover: RoverInterface) {
    this._interpreter = new Interpreter(rover);
    this._transceiver = new TransceiverPassive();
  }

  land(orientation: Orientation, position: Position): State {
    this._transceiver.emitState
    return this._interpreter.land(orientation, position);
  }

  connect() {
    this._transceiver.listen();
    this._transceiver.handleCommand(this.interpret);
  }

  private interpret(action: string): Array<State | Error> {
    const states = this._interpreter.interpret(action);
    this._transceiver.emitStates(states);
    return states;
  }

  turnRight(): State | Error {
    const state = this._interpreter.turnRight();
    this._transceiver.emitState(state);
    return state;
  }

  turnLeft(): State | Error {
    const state = this._interpreter.turnLeft();
    this._transceiver.emitState(state);
    return state;
  }

  moveForward(): State | Error {
    const state = this._interpreter.moveForward();
    this._transceiver.emitState(state);
    return state;
  }

  moveBackward(): State | Error {
    const state = this._interpreter.moveBackward();
    this._transceiver.emitState(state);
    return state;
  }

  goBack(): State | Error {
    const state = this._interpreter.moveBackward();
    this._transceiver.emitState(state);
    return state;
  }
}
