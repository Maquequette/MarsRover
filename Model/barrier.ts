import { Coordinates } from "./Coordinates";
import { Planet } from "./Planet";
export class barrier {
  private position: Coordinates;
  private planet: Planet;

  constructor( position: Coordinates, planet: Planet) {
    this.position = position;
    this.planet = planet;
  }

  public getPosition(): Coordinates {
    return this.position;
  }

}
