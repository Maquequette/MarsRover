import { Visualizer } from "../Ui/Visualizer";
import { Orientation } from "../Topology/Geometry/Enum/Orientation";
import { Position } from "../Topology/Geometry/Position";
import { Point } from "../Topology/Geometry/Point";
import { Coordinate } from "../Topology/Geometry/Coordinate";
import { Planet } from "../Topology/Planet/Planet";
import { Size } from "../Topology/Geometry/Size";

export class State {
  private readonly _orientation: Orientation;
  private readonly _position: Position;

  public constructor(orientation: Orientation, position: Position) {
    this._orientation = orientation;
    this._position = position;
  }

  public decreasedLatitude(): State {
    return new State(
      this._orientation,
      this._position.decrementLatitudeIfAvailable()
    );
  }

  public increasedLatitude(): State {
    return new State(
      this._orientation,
      this._position.incrementLatitudeIfAvailable()
    );
  }

  public decreaseLongitude(): State {
    return new State(
      this._orientation,
      this._position.decrementLongitudeIfAvailable()
    );
  }

  public increasedLongitude(): State {
    return new State(
      this._orientation,
      this._position.incrementLongitudeIfAvailable()
    );
  }

  public clockwiseRotation(): State {
    return new State(this._orientation.clockwiseRotation(), this._position);
  }

  public counterClockwiseRotation(): State {
    return new State(
      this._orientation.counterClockwiseRotation(),
      this._position
    );
  }

  public moveForward(): State {
    switch (this._orientation) {
      case Orientation.South:
        return this.decreasedLatitude();
      case Orientation.East:
        return this.increasedLongitude();
      case Orientation.West:
        return this.decreaseLongitude();
      default:
        return this.increasedLatitude();
    }
  }

  public moveBackward(): State {
    switch (this._orientation) {
      case Orientation.South:
        return this.increasedLatitude();
      case Orientation.East:
        return this.decreaseLongitude();
      case Orientation.West:
        return this.increasedLongitude();
      default:
        return this.decreasedLatitude();
    }
  }

  public visualize(visualizer: Visualizer) {
    visualizer.visualize(this._position, this._orientation);
  }

  static fromJson(json: any) {
    return new State(
      Orientation.fromString(json._orientation._representation),
      new Position(
        new Point(
          new Coordinate(json._position._point._latitude._value),
          new Coordinate(json._position._point._longitude._value)
        ),
        new Planet(
          new Size(
            new Coordinate(json._position._planet._size._width._value),
            new Coordinate(json._position._planet._size._height._value)
          )
        )
      )
    );
  }
}
