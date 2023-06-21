import { Orientation } from "../src/Enum/Orientation";
import { Position } from "../src/Geometry/Position";
import { Planet } from "../src/Model/Planet";
import { Rover } from "../src/Model/Rover";
import { State } from "../src/Model/State";
import { CartesianData } from "./utilities/cartesianData";
import { Actions } from "../src/Enum/Actions";
import { Remote } from "../src/Decorator/Remote";
import { actionToFunction } from "./utilities/remoteHandler";
import { PositionBuilder } from "./utilities/Builder/PositionBuilder";
import { Size } from "../src/Geometry/Size";
import { Coordinate } from "../src/Geometry/Coordinate";
const each = require("jest-each").default;

describe("remote => basic usage", () => {
  const planetSizes: Array<number> = [1];
  const latStarts: Array<number> = [0, 1];
  const lngStarts: Array<number> = [0, 1];

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
      planetSizes,
      [
        Actions.MoveForward,
        Actions.MoveBackward,
        Actions.TurnLeft,
        Actions.TurnRight,
      ]
    ).toTestCases()
  ).it(
    "orientation: %s, lat: %s, lng: %s, planetSize: %s, action: %s",
    (
      orientation: Orientation,
      latStart: number,
      lngStart: number,
      planetSize: number,
      action: Actions
    ) => {
      const planet = new Planet( new Size( new Coordinate(planetSize), new Coordinate(planetSize)) );

      const wall_1: Rover = new Rover(
        orientation,
        new PositionBuilder(latStart, lngStart, planet).build(),
      );

      const wall_2: Rover = new Rover(
        orientation,
        new PositionBuilder(latStart, lngStart, planet).build()
      );
      const remote = new Remote(wall_2);

      let final: Array<State> = [actionToFunction(action, wall_1)];
      let received: Array<State> = remote.setActions([action]);

      expect(received).toStrictEqual(final);
    }
  );
});

describe("remote => defined complex usage", () => {
  const commands: Array<Actions> = [
    Actions.MoveForward, // => UP
    Actions.TurnLeft,
    Actions.MoveForward, // => LEFT
    Actions.TurnRight,
    Actions.MoveBackward, // => DOWN
    Actions.TurnRight,
    Actions.MoveForward, // => RIGHT
    Actions.MoveForward, // => RIGHT
    Actions.TurnLeft,
    Actions.MoveBackward, // => DOWN
  ]; // final position : 4 1

  each(new CartesianData([Orientation.North]).toTestCases()).it(
    "orientation: %s",
    (orientation: Orientation) => {
      const planet = new Planet( new Size( new Coordinate(5), new Coordinate(5)) );

      const wall_e: Rover = new Rover(
        orientation,
        new PositionBuilder(0, 0, planet).build()
      );

      const remote = new Remote(wall_e);
      let final: State = new State(
        orientation,
        new PositionBuilder(4, 1, planet).build()
      );
      let received: Array<State> = remote.setActions(commands);
      expect(received.at(-1)).toStrictEqual(final);
    }
  );
});
