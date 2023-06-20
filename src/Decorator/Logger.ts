import { RoverInterface } from "../Interface/RoverInterface.js";
import { State } from "../Model/State.js";

export class RoverLogger implements RoverInterface {
  private _logged: RoverInterface;
  private _states: State[] = [];

  public constructor(logged: RoverInterface) {
    this._logged = logged;
  }

  private keepAndSend(etat: State) {
    this._states.push(etat);
    return etat;
  }

  moveForward(): State {
    return this.keepAndSend(this._logged.moveForward());
  }

  moveBackward(): State {
    return this.keepAndSend(this._logged.moveBackward());
  }

  turnRight(): State {
    return this.keepAndSend(this._logged.turnRight());
  }

  turnLeft(): State {
    return this.keepAndSend(this._logged.turnLeft());
  }

  public toString(): string {
    let log = "Log du Rover";
    log.concat("\n");

    for (const etat of this._states) {
      log.concat("Le rover ...");
    }

    return log;
  }
}
