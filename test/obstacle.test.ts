import { Orientation } from "../src/Topology/Geometry/Enum/Orientation";
import { Rover } from "../src/Rover/Rover";
import { RoverInterface } from "../src/Rover/Interface/RoverInterface";
import { Size } from "../src/Topology/Geometry/Size";
import { State } from "../src/Rover/State";
import { CartesianData } from "./utilities/cartesianData";
import { PlanetWithObstacles } from "../src/Topology/Planet/PlanetWithObstacles";
import { Obstacle } from "../src/Topology/Obstacle";
import { PositionBuilder } from "./utilities/Builder/PositionBuilder";
import { Point } from "../src/Topology/Geometry/Point";
import { Coordinate } from "../src/Topology/Geometry/Coordinate";
const each = require("jest-each").default;

describe("obstacle", () => {
  each(
    new CartesianData([
      Orientation.North,
      Orientation.South,
      Orientation.East,
      Orientation.West,
    ]).toTestCases()
  ).it("%s", (orientation: Orientation) => {
    const planetWithObstacles = new PlanetWithObstacles(
      new Size(new Coordinate(2), new Coordinate(2)),
      [
        new Obstacle(new Point(new Coordinate(0), new Coordinate(1))),
        new Obstacle(new Point(new Coordinate(1), new Coordinate(0))),
        new Obstacle(new Point(new Coordinate(1), new Coordinate(1))),
      ]
    );

    const wall_e: RoverInterface = new Rover();
    wall_e.land(
      orientation,
      new PositionBuilder(0, 0, planetWithObstacles).build()
    );

    let final: State = new State(
      orientation,
      new PositionBuilder(0, 0, planetWithObstacles).build()
    );

    let received: State | Error = wall_e.moveForward();

    expect(received).toStrictEqual(final);
  });
});
