import { Orientation } from "../src/Enum/Orientation";
import { Planet } from "../src/Model/Planet";
import { Rover } from "../src/Model/Rover";
import { Coordinate } from "../src/Geometry/Coordinate";
import { Size } from "../src/Geometry/Size";
import { State } from "../src/Model/State";
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
    const wall_e = new Rover(initial, position);

    let received: State | null = null;
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
    const wall_e = new Rover(initial, position);

    let received: State | null = null;
    for (let nbRotation = 0; nbRotation < nb; nbRotation++) {
      received = wall_e.turnLeft();
    }

    expect(received).toStrictEqual(final);
  });
});
