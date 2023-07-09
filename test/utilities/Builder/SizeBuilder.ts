import { Coordinate } from "../../../src/Topology/Geometry/Coordinate";
import { Size } from "../../../src/Topology/Geometry/Size";

export class SizeBuilder {
  private readonly _height: Coordinate;
  private readonly _width: Coordinate;

  constructor(height: number, width: number) {
    this._height = new Coordinate(height);
    this._width = new Coordinate(width);
  }

  public build(): Size {
    return new Size(this._width, this._height);
  }
}
