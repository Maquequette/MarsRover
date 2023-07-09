import { Orientation } from "../../Topology/Geometry/Enum/Orientation.js";
import { Position } from "../../Topology/Geometry/Position.js";
import { RoverInterface } from "../Interface/RoverInterface.js";
import { State } from "../State.js";

export class RoverLogger implements RoverInterface {
  private _logged: RoverInterface;
  private _states: Array<State | Error> = [];

  public constructor(logged: RoverInterface) {
    this._logged = logged;
  }
  public land(orientation: Orientation, position: Position): State | Error {
    return this.keepAndSend(this._logged.land(orientation, position));
  }

  public goBack(): State | Error {
    return this.keepAndSend(this._logged.goBack());
  }

  private keepAndSend(etat: State | Error) {
    this._states.push(etat);
    return etat;
  }

  public moveForward(): State | Error {
    return this.keepAndSend(this._logged.moveForward());
  }

  public moveBackward(): State | Error {
    return this.keepAndSend(this._logged.moveBackward());
  }

  public turnRight(): State | Error {
    return this.keepAndSend(this._logged.turnRight());
  }

  public turnLeft(): State | Error {
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
