import { State } from "../Model/State";
export interface RoverInterface {
  turnRight(): State;
  turnLeft(): State;
  moveForward(): State;
  moveBackward(): State;
}
