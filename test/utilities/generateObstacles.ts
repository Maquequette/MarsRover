import { Coordinate } from "../../src/Topology/Geometry/Coordinate";
import { Point } from "../../src/Topology/Geometry/Point";
import { Obstacle } from "../../src/Topology/Obstacle";

function generateObstacles(
  nbIteration: number,
  planetSize: number
): Array<Obstacle> {
  let obstacles: Array<Obstacle> = [];

  for (let i = 0; i <= nbIteration; i++) {
    let rand: number = Math.round(Math.random() * planetSize);
    let obstacle = new Obstacle(
      new Point(new Coordinate(rand), new Coordinate(rand))
    );
    obstacles.push(obstacle);
  }

  return obstacles;
}

export { generateObstacles };
