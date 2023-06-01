import { Orientation } from '../src/Enum/Orientation'
import { Coordinates } from '../src/Model/Coordinates';
import { Planet } from '../src/Model/Planet';
import { Rover } from '../src/Model/Rover'
const each = require("jest-each").default;

describe('orientation', () => {
    const coordinates = new Coordinates(0, 0);
    const planet = new Planet(10, 10, []);

    each([
        [Orientation.North, 1, Orientation.East],
        [Orientation.East, 1, Orientation.South],
        [Orientation.South, 1, Orientation.West],
        [Orientation.West, 1, Orientation.North],
    ])
    .it('%s %s %s', (initial: Orientation, nb: number, final: Orientation) => {
    
        const wall_e = new Rover(initial, coordinates, planet);
        
        for(let nbRotation = 0; nbRotation < nb; nbRotation++){
            wall_e.turnRight();
        }

        expect(wall_e.getOrientation()).toBe(final);
    })

    each([
        [Orientation.North, 1, Orientation.West],
        [Orientation.West, 1, Orientation.South],
        [Orientation.South, 1, Orientation.East],
        [Orientation.East, 1, Orientation.North]
    ])
    .it('%s %s %s', (initial: Orientation, nb: number, final: Orientation) => {

        const wall_e = new Rover(initial, coordinates, planet);
        
        for(let nbRotation = 0; nbRotation < nb; nbRotation++){
            wall_e.turnLeft();
        }

        expect(wall_e.getOrientation()).toBe(final);
    })
})