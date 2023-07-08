import { Actions } from "../../src/Rover/Enum/Actions";
import { RoverInterface } from "../../src/Rover/Interface/RoverInterface";
import { State } from "../../src/Rover/State";

function actionToFunction(
  action: string,
  rover: RoverInterface
): State | Error {
  switch (action) {
    case "F":
      return rover.moveForward();

    case "B":
      return rover.moveBackward();

    case "L":
      return rover.turnLeft();

    default:
      return rover.turnRight();
  }
}

function getActions(nbIteration: number): string {
  let commands: string = "";
  const possibility = ["F", "B", "L", "R"];

  for (let i = 0; i <= nbIteration; i++) {
    let value = possibility[Math.floor(Math.random() * possibility.length)];
    commands.concat(value);
  }

  return commands;
}

export { actionToFunction, getActions };
