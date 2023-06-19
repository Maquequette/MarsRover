import { Orientation } from "../src/Enum/Orientation"
import { Position } from "../src/Model/Position"
import { Planet } from "../src/Model/Planet"
import { Rover } from "../src/Model/Rover"
import { CartesianData } from "./utilities/cartesianData"
import { Coordinate } from "../src/Model/Coordinate"
import { Axis } from "../src/Enum/Axis"
const each = require("jest-each").default

const planetSizes: Array<number> = [1]
const latStarts: Array<number> = [0, 1]
const lngStarts: Array<number> = [0, 1]

describe('planet', () => {
    each(
        new CartesianData(
            [Orientation.North, Orientation.South, Orientation.East, Orientation.West],
            latStarts,
            lngStarts,
            planetSizes
        ).toTestCases()
        //[[Orientation.North, 0, 0, 1]]
    )
    .it(' orientation: %s, lat: %s, lng: %s, planetSize: %s', 
    (orientation: Orientation, latStart: number, lngStart: number, planetSize: number) => {
        
        const planet: Planet = new Planet(planetSize, planetSize, [])
        const startPosition: Position = new Position(
            new Coordinate(latStart, Axis.LATITUDE),
            new Coordinate(lngStart, Axis.LONGITUDE),
            planet
        )

        const wall_e: Rover = new Rover(
            orientation, 
            new Position(
                new Coordinate(latStart, Axis.LATITUDE),
                new Coordinate(lngStart, Axis.LONGITUDE),
                planet
            )
        )
        
        for(let i = 0; i < planetSize; i++){
            wall_e.moveForward()
        }   

        expect(wall_e.getPosition()).toStrictEqual(startPosition)
    })
})