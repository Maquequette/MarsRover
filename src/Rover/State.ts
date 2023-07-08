import { Visualizer } from "../Ui/Visualizer";
import { Orientation } from "../Topology/Geometry/Enum/Orientation";
import { Position } from "../Topology/Geometry/Position";

export class State {
  private readonly orientation: Orientation;
  private readonly position: Position;

  public constructor(orientation: Orientation, position: Position) {
    this.orientation = orientation;
    this.position = position;
  }

  public decreasedLatitude(): State {
    return new State(
      this.orientation,
      this.position.decrementLatitudeIfAvailable()
    );
  }

  public increasedLatitude(): State {
    return new State(
      this.orientation,
      this.position.incrementLatitudeIfAvailable()
    );
  }

  public decreaseLongitude(): State {
    return new State(
      this.orientation,
      this.position.decrementLongitudeIfAvailable()
    );
  }

  public increasedLongitude(): State {
    return new State(
      this.orientation,
      this.position.incrementLongitudeIfAvailable()
    );
  }

  public clockwiseRotation(): State {
    return new State(this.orientation.clockwiseRotation(), this.position);
  }

  public counterClockwiseRotation(): State {
    return new State(
      this.orientation.counterClockwiseRotation(),
      this.position
    );
  }

  public moveForward(): State {
    switch (this.orientation) {
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
    switch (this.orientation) {
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
    return visualizer.visualize(this.position, this.orientation);
  }
}
