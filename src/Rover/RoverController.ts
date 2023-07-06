import { Actions } from "./Enum/Actions";
import { RoverInterface } from "./Interface/RoverInterface";
import { Interpreter } from "./Interpreter";
import { State } from "./State";
import { TransceiverPassive } from "./TransceiverPassive";

export class RoverController implements RoverInterface {
  private readonly _interpreter: Interpreter;
  private readonly _transceiver: TransceiverPassive;

  constructor(rover: RoverInterface) {
    this._interpreter = new Interpreter(rover);
    this._transceiver = new TransceiverPassive();
  }

  connect() {
    this._transceiver.listen();
    this._transceiver.handleCommand(this.onCommand);
  }

  private onCommand(action: string) {
    this._interpreter.interpret(action);
  }

  turnRight(): State {
    this._transceiver.emitState(this._interpreter.turnRight());
    return this._interpreter.turnRight();
  }
  turnLeft(): State {
    return this._interpreter.turnLeft();
  }
  moveForward(): State {
    return this._interpreter.moveForward();
  }
  moveBackward(): State {
    return this._interpreter.moveBackward();
  }
}
