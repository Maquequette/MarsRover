import { Actions } from "../Rover/Enum/Actions";
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { TransceiverActive } from "./TransceiverActive";
const rl = readline.createInterface({ input, output });

export class Remote {
  private readonly _transceiver: TransceiverActive;

  constructor() {
    this._transceiver = new TransceiverActive();
  }

  listenInput() {
    rl.on("line", (input) => {
      const action = this.actionFromInput(input);
      this._transceiver.emitAction(action);
    });
  }

  actionFromInput(input: string): Actions {
    switch (input) {
      case "z":
        return Actions.MoveForward;
      case "s":
        return Actions.MoveBackward;
      case "d":
        return Actions.TurnRight;
      case "q":
        return Actions.TurnLeft;
      default:
        return Actions.Invalid;
    }
  }
}
