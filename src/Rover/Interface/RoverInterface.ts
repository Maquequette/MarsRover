import { Orientation } from "../../Topology/Geometry/Enum/Orientation";
import { Position } from "../../Topology/Geometry/Position";
import { State } from "../State";

export interface RoverInterface {
  land(orientation: Orientation, position: Position): State | Error;
  turnRight(): State | Error;
  turnLeft(): State | Error;
  moveForward(): State | Error;
  moveBackward(): State | Error;
  goBack(): State | Error;
}
