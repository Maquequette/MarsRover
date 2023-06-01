import { Coordinates } from "./Coordinates";
import { Obstacle } from "./Obstacle";

export class Planet {
  private width: number;
  private height: number;
  private obstacles: Array<Obstacle>;

  constructor(width: number, height: number, obstacles: Array<Obstacle>) {
    this.width = width;
    this.height = height;
    this.obstacles = obstacles;
  }

  public getSize(): { width: number; height: number } {
    return { width: this.width, height: this.height };
  }

  normalize(position: Coordinates): Coordinates {
    const x = ((position.getX() % this.width) % -this.width) + this.width;
    const y = ((position.getY() % this.width) % -this.width) + this.width;

    return new Coordinates(x, y);
  }

  hasObstacle(position: Coordinates): boolean {
    let hasObstacle = false;
    this.obstacles.map((obstacle) => {
      return (
        obstacle.getPosition().getX() === position.getX() ||
        obstacle.getPosition().getY() === position.getY()
      );
    });
    return hasObstacle;
  }
}

class ObstacleError extends Error {
  constructor(message: string) {
    super(message);
  }
}
