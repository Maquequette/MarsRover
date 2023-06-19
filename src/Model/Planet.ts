import { Position } from "./Position"
import { Obstacle } from "./Obstacle"
import { Coordinate } from "./Coordinate"

export class Planet {

  private readonly _width: number
  private readonly _height: number
  private readonly _obstacles: Array<Obstacle>

  constructor(width: number, height: number, obstacles: Array<Obstacle>) {
    this._width = width
    this._height = height
    this._obstacles = obstacles
  }

  toNormalize(point: Coordinate): Coordinate {
    return point.normalize(this._width, this._height)
  }

  // hasObstacle(position: Position): boolean {
  //   let hasObstacle = false;
  //   this._obstacles.map((obstacle) => {
  //     return (
  //       obstacle.getPosition().getX() === position.getX() ||
  //       obstacle.getPosition().getY() === position.getY()
  //     );
  //   });
  //   return hasObstacle;
  // }
}

class ObstacleError extends Error {
  constructor(message: string) {
    super(message)
  }
}
