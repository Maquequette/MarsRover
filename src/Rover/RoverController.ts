import { Actions } from "./Enum/Actions";
import { Interpreter } from "./Interpreter";
import { TransceiverPassive } from "./TransceiverPassive";

export class RoverController {
  private readonly _interpreter: Interpreter;
  private readonly _transceiver: TransceiverPassive;

  constructor(interpreter: Interpreter, transceiver: TransceiverPassive) {
    this._interpreter = interpreter;
    this._transceiver = transceiver;
  }

  connect() {
    this._transceiver.listen();
    this._transceiver.handleCommand(this.onCommand);
  }

  private onCommand(action: string) {
    this._interpreter.interpret(action);
  }
}
