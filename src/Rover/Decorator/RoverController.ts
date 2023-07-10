import { RoverInterface } from "../Interface/RoverInterface";
import { Interpreter } from "./Interpreter";
import { State } from "../State";
import { TransceiverPassive } from "../TransceiverPassive";
import { Orientation } from "../../Topology/Geometry/Enum/Orientation";
import { Position } from "../../Topology/Geometry/Position";

export class RoverController implements RoverInterface {
  private readonly _interpreter: Interpreter;
  private readonly _transceiver: TransceiverPassive;

  constructor(interpreter: Interpreter, transceiver: TransceiverPassive) {
    this._interpreter = interpreter;
    this._transceiver = transceiver;
  }

  public connect() {
    this._transceiver.listen();
    this._transceiver.handleCommand(this.interpret.bind(this));
  }

  private interpret(action: string) {
    const states = this._interpreter.interpret(action);
    this._transceiver.emitStates(states);
    return states;
  }

  public land(orientation: Orientation, position: Position): State | Error {
    this._transceiver.emitStates([new State(orientation, position)]);
    return this._interpreter.land(orientation, position);
  }

  public turnRight(): State | Error {
    const state = this._interpreter.turnRight();
    this._transceiver.emitStates([state]);
    return state;
  }

  public turnLeft(): State | Error {
    const state = this._interpreter.turnLeft();
    this._transceiver.emitStates([state]);
    return state;
  }

  public moveForward(): State | Error {
    const state = this._interpreter.moveForward();
    this._transceiver.emitStates([state]);
    return state;
  }

  public moveBackward(): State | Error {
    const state = this._interpreter.moveBackward();
    this._transceiver.emitStates([state]);
    return state;
  }

  public goBack(): State | Error {
    const state = this._interpreter.moveBackward();
    this._transceiver.emitStates([state]);
    return state;
  }
}
