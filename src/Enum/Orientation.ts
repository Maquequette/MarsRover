export class Orientation {
  static North: Orientation = new Orientation("North");
  static South: Orientation = new Orientation("South");
  static East: Orientation = new Orientation("East");
  static West: Orientation = new Orientation("West");
  private readonly _representation: string;

  private constructor(representation: string) {
    this._representation = representation;
  }

  clockwiseRotation(): Orientation {
    switch (this) {
      case Orientation.East:
        return Orientation.South;
      case Orientation.South:
        return Orientation.West;
      case Orientation.West:
        return Orientation.North;
      default:
        return Orientation.East;
    }
  }

  counterClockwiseRotation(): Orientation {
    switch (this) {
      case Orientation.East:
        return Orientation.North;
      case Orientation.South:
        return Orientation.East;
      case Orientation.West:
        return Orientation.South;
      default:
        return Orientation.West;
    }
  }

  toString(): string {
    return this._representation;
  }
}
