import { Orientation } from "../src/Enum/Orientation"
import { Planet } from "../src/Model/Planet"
import { Rover } from "../src/Model/Rover"
import { CartesianData } from "./utilities/cartesianData"
import { Size } from "../src/Geometry/Size"
import { Coordinate } from "../src/Geometry/Coordinate"
import { State } from "../src/Model/State"
import { Position } from "../src/Geometry/Position"
import { Point } from "../src/Geometry/Point"
const each = require("jest-each").default

const planetSizes: Array<number> = [1, 10]
const latStarts: Array<number> = [0, 1, 6]
const lngStarts: Array<number> = [0, 1, 6]

describe('planet', () => {
    each(
        new CartesianData(
            [Orientation.North, Orientation.South, Orientation.East, Orientation.West],
            latStarts,
            lngStarts,
            planetSizes
        ).toTestCases()
    )
    .it(' orientation: %s, lat: %s, lng: %s, planetSize: %s', 
    (orientation: Orientation, latStart: number, lngStart: number, planetSize: number) => {
        
        const planet = new Planet(new Size(planetSize), new Size(planetSize), false)
        const startPosition: Position = new Position(
            new Point(new Coordinate(latStart), new Coordinate(lngStart)),
            planet
        )

        const final = new State(orientation, startPosition)

        const wall_e: Rover = new Rover(
            orientation, 
            new Position(
                new Point(new Coordinate(latStart), new Coordinate(lngStart)),
                planet
            )
        )
        
        let received: State|null = null
        for(let i = 0; i < planetSize; i++){
            received = wall_e.moveForward()
        }   

        expect(received).toStrictEqual(final)
    })
})