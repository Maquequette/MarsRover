import { Orientation } from '../src/Enum/Orientation'
import { Position } from '../src/Geometry/Position'
import { Planet } from '../src/Model/Planet'
import { Rover } from '../src/Model/Rover'
import { Coordinate } from '../src/Geometry/Coordinate'
import { Size } from '../src/Geometry/Size'
import { Point } from '../src/Geometry/Point'
import { State } from '../src/Model/State'
import { CartesianData } from './utilities/cartesianData'
import { PlanetWithObstacles } from '../src/Model/PlanetWithObstacles'
import { Obstacle } from '../src/Model/Obstacle'
const each = require("jest-each").default

describe('obstacle', () => {

    each(
        new CartesianData(
            [Orientation.North, Orientation.South, Orientation.East, Orientation.West]
        ).toTestCases()
    )
    .it('%s', (orientation: Orientation) => {
    
        const planet = new Planet(new Size(2), new Size(2), true);
        const planetWithObstacles = new PlanetWithObstacles(new Size(2), new Size(2), [
            new Obstacle(new Position(new Point(new Coordinate(0), new Coordinate(1)), planet)),
            new Obstacle(new Position(new Point(new Coordinate(1), new Coordinate(0)), planet)),
            new Obstacle(new Position(new Point(new Coordinate(1), new Coordinate(1)), planet))
        ]);


        const wall_e: Rover = new Rover(orientation, new Position(new Point(new Coordinate(0), new Coordinate(0)), planetWithObstacles));
        
        let final: State = new State(orientation, new Position(new Point(new Coordinate(0), new Coordinate(0)), planetWithObstacles));
        let received: State = wall_e.moveForward();
        
        expect(received).toStrictEqual(final);
    })
})