import { Interpreter } from "../src/Rover/Decorator/Interpreter";
import { Orientation } from "../src/Topology/Geometry/Enum/Orientation";
import { Coordinate } from "../src/Topology/Geometry/Coordinate";
import { Size } from "../src/Topology/Geometry/Size";
import { Rover } from "../src/Rover/Rover";
import { RoverInterface } from "../src/Rover/Interface/RoverInterface";
import { State } from "../src/Rover/State";
import { actionToFunction, getActions } from "./utilities/remoteHandler";
import { CartesianData } from "./utilities/cartesianData";
import { generateObstacles } from "./utilities/generateObstacles";
import { PlanetWithObstacles } from "../src/Topology/Planet/PlanetWithObstacles";
import { PositionBuilder } from "./utilities/Builder/PositionBuilder";
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
        new Size(new Coordinate(planetSize), new Coordinate(planetSize)),
        generateObstacles(nbObstacle, planetSize)
      );
      const commands = getActions(nbCommand);

      //===
      const wall_1: RoverInterface = new Rover(
        orientation,
        new PositionBuilder(latStart, lngStart, planetWithObstacles).build()
      );
      let final: Array<State> = [];
      const arrayCmd = commands.split("");
      for (let i = 0; i <= arrayCmd.length - 1; i++) {
        final.push(actionToFunction(arrayCmd[i], wall_1));
      }

      //===
      const wall_2: RoverInterface = new Rover(
        orientation,
        new PositionBuilder(latStart, lngStart, planetWithObstacles).build()
      );
      const remote = new Interpreter(wall_2);
      let received: Array<State> = remote.interpret(commands);

      expect(received).toStrictEqual(final);
    }
  );
});
