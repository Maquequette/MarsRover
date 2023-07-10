import { Actions } from "../../Rover/Enum/Actions";

export class UserInterpreter {
  static actionFromInput(input: string): Actions {
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
