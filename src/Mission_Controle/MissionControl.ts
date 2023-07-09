import { stdin as input, stdout as output } from "node:process";
import * as readline from "node:readline/promises";
import { TransceiverActive } from "./TransceiverActive";
import { Actions } from "../Rover/Enum/Actions";
import { State } from "../Rover/State";
import { Visualizer } from "../Ui/Visualizer";

export class MissionControl {
  private readonly _visulizer: Visualizer;
  private readonly _transceiver: TransceiverActive;

  constructor() {
    this._visulizer = new Visualizer();
    this._transceiver = new TransceiverActive();
  }

  public listenAction() {
    this._transceiver.handleLanding(this.handleLanding);
    //this._transceiver.handleAction();
  }

  public listenInput() {
    const rl = readline.createInterface({ input, output });
    rl.on("line", (input) => {
      const action = this.actionFromInput(input);
      this._transceiver.emitAction(action);
    });
  }

  public handleLanding(state: State) {
    state.visualize(this._visulizer);
  }

  public actionFromInput(input: string): Actions {
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
