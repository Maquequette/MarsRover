import { stdin as input, stdout as output } from "node:process";
import * as readline from "node:readline/promises";
import { TransceiverActive } from "./TransceiverActive";
import { State } from "../Rover/State";
import { Visualizer } from "../Ui/Visualizer";
import { UserInterpreter } from "./Utilities/UserInterpreter";

export class MissionControl {
  private readonly _visualizer: Visualizer;
  private readonly _transceiver: TransceiverActive;

  constructor() {
    this._visualizer = new Visualizer();
    this._transceiver = new TransceiverActive();
  }

  public connect() {
    this._transceiver.handleLanding(this.handleLanding.bind(this));
    this._transceiver.handleStates(this.handleVisualization.bind(this));
  }

  public handleLanding(res: any) {
    const rl = readline.createInterface({ input, output });
    rl.write("Landing succeed");
    rl.write("What do you wanna do ?");
    rl.on("line", (input) => {
      const action = UserInterpreter.actionFromInput(input);
      this._transceiver.emitAction(action);
    });
    this.handleVisualization(res);
  }

  public handleVisualization(res: any) {
    if (res[0].message) {
      return console.log(res[0].message);
    }
    const state = State.fromJson(res[0]);
    state.visualize(this._visualizer);
  }
}
