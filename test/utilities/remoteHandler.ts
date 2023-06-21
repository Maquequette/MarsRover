import { Actions } from "../../src/Enum/Actions";
import { Rover } from "../../src/Model/Rover";
import { State } from "../../src/Model/State";

function actionToFunction(action: Actions, rover: Rover): State {
  switch (action) {
    case Actions.MoveForward:
      return rover.moveForward();

    case Actions.MoveBackward:
      return rover.moveBackward();

    case Actions.TurnLeft:
      return rover.turnLeft();

    case Actions.TurnRight:
      return rover.turnRight();
  }
}

function generateCommands(nbIteration: number): Array<Actions> {
  let commands: Array<Actions> = [];
  const keys = Object.keys(Actions);
  const values = Object.values(Actions);

  for (let i = 0; i <= nbIteration; i++) {
    let enumKey = keys[Math.floor(Math.random() * keys.length)];
    let index = keys.findIndex( x => enumKey === x);
    commands.push(values[index]);
  }

  return commands;
}

export { actionToFunction, generateCommands };
