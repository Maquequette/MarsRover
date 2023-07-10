import { stdin as input, stdout as output } from "node:process";
import * as readline from "node:readline/promises";
import { TransceiverActive } from "./TransceiverActive";
import { State } from "../Rover/State";
import { Visualizer } from "../Ui/Visualizer";
import { UserInterpreter } from "./Utilities/UserInterpreter";
const rl = readline.createInterface({ input, output });

export class MissionControl {
  private readonly _visualizer: Visualizer;
  private readonly _transceiver: TransceiverActive;

  constructor() {
    this._visualizer = new Visualizer();
    this._transceiver = new TransceiverActive();
  }

  public connect() {
    this._transceiver.handleStates(this.handleVisualization.bind(this));
  }

  public handleVisualization(res: any) {
    rl.write("What do you wanna do ? \n");
    rl.on("line", (input) => {
      const action = UserInterpreter.actionFromInput(input);
      this._transceiver.emitAction(action);
      rl.close();
    });

    if (res[0] && res[0]?.message) {
      const state = State.fromJson(res[0]);
      state.visualize(this._visualizer);
    }
  }
}
