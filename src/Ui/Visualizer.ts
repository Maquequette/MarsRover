import { State } from "../Rover/State";
import { Coordinate } from "../Topology/Geometry/Coordinate";
import { Orientation } from "../Topology/Geometry/Enum/Orientation";
import { Point } from "../Topology/Geometry/Point";
import { Position } from "../Topology/Geometry/Position";
import { Planet } from "../Topology/Planet/Planet";
import { NothingeRenderer } from "./NothingRenderer";
import { ObstacleRenderer } from "./ObstacleRenderer";
import { RoverRenderer } from "./RoverRenderer";

export class Visualizer {
  public visualize(position: Position, orientation: Orientation) {
    let prevPosition = position;
    let content: string = "";
    const planet: Planet = position.getPlanet();
    const height: number = planet.getSize().getHeight().getValue();
    const width: number = planet.getSize().getWidth().getValue();

    for (let i: number = 0; i < height; i++) {
      for (let j: number = 0; j < width; j++) {
        const index: Position = new Position(
          new Point(new Coordinate(j), new Coordinate(i)),
          planet
        );
        if (index.isSamePosition(position)) {
          content += RoverRenderer.getSymbole(orientation);
        } else if (prevPosition.isSamePosition(position)) {
          content += ObstacleRenderer.getSymbole();
        } else {
          content += NothingeRenderer.getSymbole();
        }
      }
      content += "\n";
    }
    return content;
  }
}
