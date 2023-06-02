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
    const y = ((position.getY() % this.height) % -this.height) + this.height;

    return new Coordinates(x, y);
  }

  hasObstacle(position: Coordinates): boolean {
    return this.obstacles.some(
      (obs) =>
        obs.getPosition().getX() === position.getX() &&
        obs.getPosition().getY() === position.getY()
    );
  }
}

class ObstacleError extends Error {
  constructor(message: string) {
    super(message);
  }
}
