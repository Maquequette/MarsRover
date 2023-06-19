import { Orientation } from '../src/Enum/Orientation'
import { Position } from '../src/Model/Position'
import { Planet } from '../src/Model/Planet'
import { Rover } from '../src/Model/Rover'
import { Coordinate } from '../src/Model/Coordinate'
import { Axis } from '../src/Enum/Axis'
const each = require("jest-each").default

describe('orientation', () => {
    const planet = new Planet(10, 10, [])
    const position = new Position(
        new Coordinate(0, Axis.LATITUDE),
        new Coordinate(0, Axis.LONGITUDE),
        planet
    )

    each([
        [Orientation.North, 1, Orientation.East],
        [Orientation.East, 1, Orientation.South],
        [Orientation.South, 1, Orientation.West],
        [Orientation.West, 1, Orientation.North],
    ])
    .it('%s %s %s', (initial: Orientation, nb: number, final: Orientation) => {
    
        const wall_e = new Rover(initial, position)
        
        for(let nbRotation = 0; nbRotation < nb; nbRotation++){
            wall_e.turnRight()
        }

        expect(wall_e.getOrientation()).toBe(final)
    })

    each([
        [Orientation.North, 1, Orientation.West],
        [Orientation.West, 1, Orientation.South],
        [Orientation.South, 1, Orientation.East],
        [Orientation.East, 1, Orientation.North]
    ])
    .it('%s %s %s', (initial: Orientation, nb: number, final: Orientation) => {

        const wall_e = new Rover(initial, position)
        
        for(let nbRotation = 0; nbRotation < nb; nbRotation++){
            wall_e.turnLeft()
        }

        expect(wall_e.getOrientation()).toBe(final)
    })
})