import { Remote } from "../src/Decorator/Remote";
import { Orientation } from "../src/Enum/Orientation";
import { Coordinate } from "../src/Geometry/Coordinate";
import { Point } from "../src/Geometry/Point";
import { Position } from "../src/Geometry/Position";
import { Size } from "../src/Geometry/Size";
import { Planet } from "../src/Model/Planet";
import { Rover } from "../src/Model/Rover";
import { State } from "../src/Model/State";
import { actionToFunction, generateCommands } from "./utilities/remoteHandler";
import { CartesianData } from "./utilities/cartesianData";
import { generateObstacles } from "./utilities/generateObstacles";
import { PlanetWithObstacles } from "../src/Model/PlanetWithObstacles";
import { PositionBuilder } from "./utilities/PositionBuilder";
const each = require("jest-each").default;

describe("TOTAL => EXTREME RANDOM COMPLEX USAGE WITH OBSTACLES", () => {
  const planetSizes: Array<number> = [1];
  const latStarts: Array<number> = [0, 1];
  const lngStarts: Array<number> = [0, 1];
  const commandIterations: Array<number> = [1, 5];
  const obstacleNumber: Array<number> = [3];

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
      commandIterations,
      obstacleNumber
    ).toTestCases()
  ).it(
    "orientation: %s, lat: %s, lng: %s, planetSize: %s, nbCommand: %s, nbObstacle: %s",
    (
      orientation: Orientation,
      latStart: number,
      lngStart: number,
      planetSize: number,
      nbCommand: number,
      nbObstacle: number
    ) => {
      const planetWithObstacles = new PlanetWithObstacles(
        planetSize,
        planetSize,
        generateObstacles(nbObstacle, planetSize)
      );
      const commands = generateCommands(nbCommand);

      //===
      const wall_1: Rover = new Rover(
        orientation,
        new PositionBuilder(latStart, lngStart).build(),
        planetWithObstacles
      );
      let final: Array<State> = [];
      for (let i = 0; i <= commands.length - 1; i++) {
        final.push(actionToFunction(commands[i], wall_1));
      }

      //===
      const wall_2: Rover = new Rover(
        orientation,
        new PositionBuilder(latStart, lngStart).build(),
        planetWithObstacles
      );
      const remote = new Remote(wall_2);
      let received: Array<State> = remote.setActions(commands);

      expect(received).toStrictEqual(final);
    }
  );
});
