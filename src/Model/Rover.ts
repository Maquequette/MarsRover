import { Position } from "./Position"
import { Orientation } from "../Enum/Orientation"
import { Actions } from "../Enum/Actions"

export class Rover {
  
  private position: Position;
  private orientation: Orientation;

  constructor(orientation: Orientation, position: Position) {
    this.position = position;
    this.orientation = orientation;
  }

  public turnLeft(): void {
    this.orientation = this.orientation.RotationAntihoraire()
  }

  public turnRight(): void {
    this.orientation = this.orientation.RotationHoraire()
  }

  public moveForward(): void {
    this.position = this.position.move(this.orientation)
  }

  public movebackward(): void {
    this.position = this.position.move(this.orientation)
  }

  public getOrientation(): Orientation {
    return this.orientation
  }

  public getPosition(): Position {
    return this.position
  }

  // private setPosition(position: Position): void {
  //   if (this.planet.hasObstacle(position)) {
  //     console.log("OBSTACLE !!!");
  //     console.log(this.position);
  //   } else {
  //     this.position = position;
  //   }
  // }

  // public setActions(actions: Array<Actions>):void {
  //   actions.map((action: Actions) => {
  //     switch (action) {
  //       case Actions.MoveBackward:
  //         this.movebackward();
  //         break;
  //       case Actions.MoveForward:
  //         this.moveForward();
  //         break;
  //       case Actions.TurnLeft:
  //         this.turnLeft();
  //         break;
  //       case Actions.TurnRight:
  //         this.turnRight();
  //         break;
  //     }
  //   });
  // }
}
