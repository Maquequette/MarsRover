export class Orientation {
  static North: Orientation = new Orientation("North");
  static South: Orientation = new Orientation("South");
  static East: Orientation = new Orientation("East");
  static West: Orientation = new Orientation("West");
  private readonly _representation: string;

  private constructor(representation: string) {
    this._representation = representation;
  }

  public clockwiseRotation(): Orientation {
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

  public counterClockwiseRotation(): Orientation {
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

  public toString(): string {
    return this._representation;
  }

  static fromString(string: any) {
    switch (string) {
      case Orientation.East:
        return Orientation.East;
      case Orientation.South:
        return Orientation.South;
      case Orientation.West:
        return Orientation.West;
      default:
        return Orientation.North;
    }
  }
}
