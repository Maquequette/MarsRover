import { Orientation } from "../src/Enum/Orientation";
import { Coordinates } from "../src/Model/Coordinates";
import { Planet } from "../src/Model/Planet";
import { Rover } from "../src/Model/Rover";
import { CartesianData } from "./utilities/cartesianData";
const each = require("jest-each").default;

const planetSizes: Array<number> = [1, 2, 10];
const latStarts: Array<number> = [0, 1, 11];
const lngStarts: Array<number> = [0, 1, 11];

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
        
        const planet: Planet = new Planet(planetSize, planetSize, []);
        const startPosition: Coordinates = new Coordinates(latStart, lngStart);
        const wall_e: Rover = new Rover(orientation, startPosition, planet);
        
        for(let i = 0; i < planetSize; i++){
            wall_e.moveForward();
        }

        expect(wall_e.getPosition()).toStrictEqual(startPosition);
    })
})