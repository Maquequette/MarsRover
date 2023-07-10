import { Orientation } from "../src/Topology/Geometry/Enum/Orientation";
import { Planet } from "../src/Topology/Planet/Planet";
import { Rover } from "../src/Rover/Rover";
import { RoverInterface } from "../src/Rover/Interface/RoverInterface";
import { Coordinate } from "../src/Topology/Geometry/Coordinate";
import { Size } from "../src/Topology/Geometry/Size";
import { State } from "../src/Rover/State";
import { PositionBuilder } from "./utilities/Builder/PositionBuilder";
const each = require("jest-each").default;

describe("orientation", () => {
  const planet = new Planet(new Size(new Coordinate(2), new Coordinate(2)));
  const position = new PositionBuilder(0, 0, planet).build();

  each([
    [Orientation.North, 1, new State(Orientation.East, position)],
    [Orientation.East, 1, new State(Orientation.South, position)],
    [Orientation.South, 1, new State(Orientation.West, position)],
    [Orientation.West, 1, new State(Orientation.North, position)],
  ]).it("%s %s %s", (initial: Orientation, nb: number, final: State) => {
    const wall_e = new Rover();
    wall_e.land(initial, position);
    let received: State | null | Error = null;
    for (let nbRotation = 0; nbRotation < nb; nbRotation++) {
      received = wall_e.turnRight();
    }

    expect(received).toStrictEqual(final);
  });

  each([
    [Orientation.North, 1, new State(Orientation.West, position)],
    [Orientation.West, 1, new State(Orientation.South, position)],
    [Orientation.South, 1, new State(Orientation.East, position)],
    [Orientation.East, 1, new State(Orientation.North, position)],
  ]).it("%s %s %s", (initial: Orientation, nb: number, final: State) => {
    const wall_e: RoverInterface = new Rover();
    wall_e.land(initial, position);

    let received: State | null | Error = null;
    for (let nbRotation = 0; nbRotation < nb; nbRotation++) {
      received = wall_e.turnLeft();
    }

    expect(received).toStrictEqual(final);
  });
});
