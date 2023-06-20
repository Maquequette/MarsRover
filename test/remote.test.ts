import { Orientation } from '../src/Enum/Orientation'
import { Position } from '../src/Geometry/Position'
import { Planet } from '../src/Model/Planet'
import { Rover } from '../src/Model/Rover'
import { Coordinate } from '../src/Geometry/Coordinate'
import { Size } from '../src/Geometry/Size'
import { Point } from '../src/Geometry/Point'
import { State } from '../src/Model/State'
import { CartesianData } from './utilities/cartesianData'
import { Actions } from '../src/Enum/Actions'
import { Remote } from '../src/Decorator/Remote'
import { actionToFunction } from './utilities/remoteHandler'
const each = require("jest-each").default

describe('remote => basic usage', () => {

    const planetSizes: Array<number> = [1]
    const latStarts: Array<number> = [0, 1]
    const lngStarts: Array<number> = [0, 1]

    each(
        new CartesianData(
            [Orientation.North, Orientation.South, Orientation.East, Orientation.West],
            latStarts,
            lngStarts,
            planetSizes,
            [Actions.MoveForward, Actions.MoveBackward, Actions.TurnLeft, Actions.TurnRight]
        ).toTestCases()
    )
    .it('orientation: %s, lat: %s, lng: %s, planetSize: %s, action: %s', 
    (orientation: Orientation, latStart: number, lngStart: number, planetSize: number, action: Actions) => {
    
        const planet = new Planet(new Size(planetSize), new Size(planetSize), false);
        const startPosition: Position = new Position(
            new Point(new Coordinate(latStart), new Coordinate(lngStart)),
            planet
        );

        const wall_1: Rover = new Rover(
            orientation, 
            new Position(
                new Point(new Coordinate(latStart), new Coordinate(lngStart)),
                planet
            )
        );
        const wall_2: Rover = new Rover(
            orientation, 
            new Position(
                new Point(new Coordinate(latStart), new Coordinate(lngStart)),
                planet
            )
        );
        const remote = new Remote(wall_2);
        
        let final: Array<State> = [actionToFunction(action, wall_1)];
        let received: Array<State> = remote.setActions([action]);

        expect(received).toStrictEqual(final);
    })
})

describe('remote => defined complex usage', () => {

    const commands: Array<Actions> = [
        Actions.MoveForward, // => UP
        Actions.TurnLeft, Actions.MoveForward, // => LEFT
        Actions.TurnRight, Actions.MoveBackward, // => DOWN
        Actions.TurnRight, Actions.MoveForward, // => RIGHT
        Actions.MoveForward, // => RIGHT
        Actions.TurnLeft, Actions.MoveBackward // => DOWN
    ] // final position : 4 1 

    each(
        new CartesianData([Orientation.North]).toTestCases()
    )
    .it('orientation: %s', 
    (orientation: Orientation) => {
    
        const planet = new Planet(new Size(5), new Size(5), false);
        const startPosition: Position = new Position(
            new Point(new Coordinate(0), new Coordinate(0)),
            planet
        );

        const wall_e: Rover = new Rover(
            orientation, 
            new Position(
                new Point(new Coordinate(0), new Coordinate(0)),
                planet
            )
        );
        
        const remote = new Remote(wall_e);
        let final: State = new State(
            orientation, 
            new Position(
                new Point(new Coordinate(4), new Coordinate(1)),
                planet
            )
        );
        let received: Array<State> = remote.setActions(commands);
        expect(received.at(-1)).toStrictEqual(final);
    })
})