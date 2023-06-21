import { Orientation } from "../src/Enum/Orientation";
import { Planet } from "../src/Model/Planet";
import { Rover } from "../src/Model/Rover";
import { CartesianData } from "./utilities/cartesianData";
import { State } from "../src/Model/State";
import { Position } from "../src/Geometry/Position";
import { PositionBuilder } from "./utilities/Builder/PositionBuilder";
import { Size } from "../src/Geometry/Size";
import { Coordinate } from "../src/Geometry/Coordinate";
const each = require("jest-each").default;

const planetSizes: Array<number> = [1, 10];
const latStarts: Array<number> = [0, 1, 6];
const lngStarts: Array<number> = [0, 1, 6];

describe("planet", () => {
  each(
    new CartesianData(
      [
        Orientation.North,
        Orientation.South,
        Orientation.East,
        Orientation.West,
      ],
      latStarts,
      lngStarts,
      planetSizes
    ).toTestCases()
  ).it(
    " orientation: %s, lat: %s, lng: %s, planetSize: %s",
    (
      orientation: Orientation,
      latStart: number,
      lngStart: number,
      planetSize: number
    ) => {
      const planet = new Planet( new Size( new Coordinate(planetSize), new Coordinate(planetSize)) );
      const startPosition: Position = new PositionBuilder(
        latStart,
        lngStart,
        planet
      ).build();

      const final = new State(orientation, startPosition);

      const wall_e: Rover = new Rover(
        orientation,
        new PositionBuilder(latStart, lngStart, planet).build()
      );

      let received: State | null = null;
      for (let i = 0; i < planetSize; i++) {
        received = wall_e.moveForward();
      }

      expect(received).toStrictEqual(final);
    }
  );
});
