import { Coordinate } from "../../src/Geometry/Coordinate";
import { Point } from "../../src/Geometry/Point";
import { Position } from "../../src/Geometry/Position";
import { Obstacle } from "../../src/Model/Obstacle";
import { Planet } from "../../src/Model/Planet";
import { PositionBuilder } from "./PositionBuilder";

function generateObstacles(
  nbIteration: number,
  planetSize: number
): Array<Obstacle> {
  let obstacles: Array<Obstacle> = [];

  for (let i = 0; i <= nbIteration; i++) {
    let rand: number = Math.round(Math.random() * planetSize);
    let obstacle = new Obstacle(new PositionBuilder(rand, rand).build());
    obstacles.push(obstacle);
  }

  return obstacles;
}

export { generateObstacles };
