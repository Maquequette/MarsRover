import { Orientation } from "../src/Topology/Geometry/Enum/Orientation";
import { Planet } from "../src//Topology/Planet/Planet";
import { RoverInterface } from "../src/Rover/Interface/RoverInterface";
import { Rover } from "../src/Rover/Rover";
import { State } from "../src/Rover/State";
import { CartesianData } from "./utilities/cartesianData";
import { Interpreter } from "../src/Rover/Decorator/Interpreter";
import { actionToFunction } from "./utilities/remoteHandler";
import { PositionBuilder } from "./utilities/Builder/PositionBuilder";
import { Size } from "../src/Topology/Geometry/Size";
import { Coordinate } from "../src/Topology/Geometry/Coordinate";
import { Actions } from "../src/Rover/Enum/Actions";
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
      action: string
    ) => {
      const planet = new Planet(
        new Size(new Coordinate(planetSize), new Coordinate(planetSize))
      );

      const wall_1: RoverInterface = new Rover(
        orientation,
        new PositionBuilder(latStart, lngStart, planet).build()
      );

      const wall_2: RoverInterface = new Rover(
        orientation,
        new PositionBuilder(latStart, lngStart, planet).build()
      );
      const remote = new Interpreter(wall_2);

      let final: Array<State> = [actionToFunction(action, wall_1)];
      let received: Array<State> = remote.interpret(action);

      expect(received).toStrictEqual(final);
    }
  );
});

describe("remote => defined complex usage", () => {
  const commands: string = "FLFRBRFFLB"; // final position : 4 1

  each(new CartesianData([Orientation.North]).toTestCases()).it(
    "orientation: %s",
    (orientation: Orientation) => {
      const planet = new Planet(new Size(new Coordinate(5), new Coordinate(5)));

      const wall_e: RoverInterface = new Rover(
        orientation,
        new PositionBuilder(0, 0, planet).build()
      );

      const remote = new Interpreter(wall_e);
      let final: State = new State(
        orientation,
        new PositionBuilder(4, 1, planet).build()
      );

      let received: Array<State> = remote.interpret(commands);
      expect(received.at(-1)).toStrictEqual(final);
    }
  );
});
