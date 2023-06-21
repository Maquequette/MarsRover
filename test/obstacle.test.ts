import { Orientation } from "../src/Enum/Orientation";
import { Position } from "../src/Geometry/Position";
import { Planet } from "../src/Model/Planet";
import { Rover } from "../src/Model/Rover";
import { Size } from "../src/Geometry/Size";
import { State } from "../src/Model/State";
import { CartesianData } from "./utilities/cartesianData";
import { PlanetWithObstacles } from "../src/Model/PlanetWithObstacles";
import { Obstacle } from "../src/Model/Obstacle";
import { PositionBuilder } from "./utilities/PositionBuilder";
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
    const planetWithObstacles = new PlanetWithObstacles(2, 2, [
      new Obstacle(new PositionBuilder(0, 1).build()),
      new Obstacle(new PositionBuilder(1, 0).build()),
      new Obstacle(new PositionBuilder(1, 1).build()),
    ]);

    const wall_e: Rover = new Rover(
      orientation,
      new PositionBuilder(0, 0).build(),
    );

    let final: State = new State(
      orientation,
      new PositionBuilder(0, 0).build()
    );
    let received: State = wall_e.moveForward();

    expect(received).toStrictEqual(final);
  });
});
