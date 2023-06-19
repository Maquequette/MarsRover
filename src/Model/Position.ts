import { Axis } from "../Enum/Axis"
import { Orientation } from "../Enum/Orientation"
import { Coordinate } from "./Coordinate"
import { Planet } from "./Planet"

export class Position {

  private readonly _x: Coordinate
  private readonly _y: Coordinate
  private readonly _planet: Planet

  constructor(x: Coordinate, y: Coordinate, planet: Planet) {
    this._x = planet.toNormalize(x)
    this._y = planet.toNormalize(y)
    this._planet = planet
  }

  public increment(axis: Axis): Position {

    switch(axis){
      case Axis.LATITUDE:
        return new Position(this._x.increment(), this._y, this._planet)

      case Axis.LONGITUDE:
        return new Position(this._x, this._y.increment(), this._planet)
    }
  }

  public decrement(axis: Axis): Position {

    switch(axis){
      case Axis.LATITUDE:
        return new Position(this._x.decrement(), this._y, this._planet)

      case Axis.LONGITUDE:
        return new Position(this._x, this._y.decrement(), this._planet)
    }
  }

  public move(orientation: Orientation, forward: boolean = true): Position {
    
    switch (orientation) {
      case Orientation.North:
        return forward ? this.increment(Axis.LATITUDE) : this.decrement(Axis.LATITUDE)
        
      case Orientation.East:
        return forward ? this.increment(Axis.LONGITUDE) : this.decrement(Axis.LONGITUDE)
        
      case Orientation.South:
        return forward ? this.decrement(Axis.LATITUDE) : this.increment(Axis.LATITUDE)
        
      default:
        return forward ? this.decrement(Axis.LONGITUDE) : this.increment(Axis.LONGITUDE)
    }
  }
}
