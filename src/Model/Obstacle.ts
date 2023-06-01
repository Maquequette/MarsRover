import { Coordinates } from "./Coordinates";
export class Obstacle {
  private position: Coordinates;

  constructor(position: Coordinates) {
    this.position = position;
  }

  public getPosition(): Coordinates {
    return this.position;
  }

  public setPosition(position: Coordinates): void {
    this.position.setPosition(position);
  }
}
