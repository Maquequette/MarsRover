import { stdin as input, stdout as output } from "node:process";
import * as readline from "node:readline/promises";
import { TransceiverActive } from "./TransceiverActive";
import { Actions } from "../Rover/Enum/Actions";
import { State } from "../Rover/State";
import { Visualizer } from "../Ui/Visualizer";
import { plainToInstance } from "class-transformer";

export class MissionControl {
  private readonly _visualizer: Visualizer;
  private readonly _transceiver: TransceiverActive;

  constructor() {
    this._visualizer = new Visualizer();
    this._transceiver = new TransceiverActive();
  }

  public connect() {
    this._transceiver.handleLanding(this.handleVisualization.bind(this));
    this._transceiver.handleActions(this.handleVisualization.bind(this));

    const rl = readline.createInterface({ input, output });
    rl.write("What do you wanna do ?");
    rl.on("line", (input) => {
      const action = this.actionFromInput(input);
      this._transceiver.emitAction(action);
    });
  }

  public handleVisualization(res: Array<State>) {
    const state = plainToInstance(State, res[0]);
    state.visualize(this._visualizer);
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
