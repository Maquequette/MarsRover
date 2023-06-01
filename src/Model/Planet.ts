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

  isOutOfBand(position: Coordinates): boolean {
    return (
      position.getX() >= 0 &&
      position.getX() < this.width &&
      position.getY() >= 0 &&
      position.getY() < this.height
    );
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
