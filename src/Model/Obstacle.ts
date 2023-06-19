import { Position } from "./Position"

export class Obstacle {
  private position: Position

  constructor(position: Position) {
    this.position = position
  }

  public getPosition(): Position {
    return this.position
  }

  public setPosition(position: Position): void {
    //this.position.setPosition(position)
  }
}
