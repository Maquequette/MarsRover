import { Actions } from "../../src/Enum/Actions"
import { Rover } from "../../src/Model/Rover"
import { State } from "../../src/Model/State"

function actionToFunction(action: Actions, rover: Rover): State {
    switch(action){
        case Actions.MoveForward:
            return rover.moveForward()

        case Actions.MoveBackward:
            return rover.moveBackward()

        case Actions.TurnLeft:
            return rover.turnLeft()

        case Actions.TurnRight:
            return rover.turnRight()
    }
}

function generateCommands(nbIteration: number): Array<Actions> {
    let commands: Array<Actions> = [];
    const values = Object.keys(Actions);

    for(let i = 0; i <= nbIteration; i++){
        let enumKey = values[Math.round(Math.random() * values.length)];
        commands.push(Actions[enumKey]);
    }

    return commands;
}

export {
    actionToFunction,
    generateCommands
}