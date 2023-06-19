import { Orientation } from "./Enum/Orientation";
import { Coordinates } from "./Geometry/Position";
import { Planet } from "./Model/Planet";
import { Rover } from "./Model/Rover";
import { Obstacle } from "./Model/Obstacle";
import { Actions } from "./Enum/Actions";

const mars = new Planet(100, 100, [new Obstacle(new Coordinates(10, 10))]);
const discover = new Rover(Orientation.North, new Coordinates(0, 0), mars);
discover.setActions([
  Actions.MoveBackward,
  Actions.TurnLeft,
  Actions.TurnRight,
]);
// rover.turn(new Orientation(Orientation.North));
// rover.move();
