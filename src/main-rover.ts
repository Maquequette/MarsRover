import { PositionBuilder } from "../test/utilities/Builder/PositionBuilder";
import { TransceiverPassive } from "./Rover/TransceiverPassive";
import { Rover } from "./Rover/Rover";
import { Coordinate } from "./Topology/Geometry/Coordinate";
import { Orientation } from "./Topology/Geometry/Enum/Orientation";
import { Size } from "./Topology/Geometry/Size";
import { Planet } from "./Topology/Planet/Planet";
import { RoverController } from "./Rover/RoverController";
import { Interpreter } from "./Rover/Interpreter";

const mars = new Planet(new Size(new Coordinate(10), new Coordinate(10)));
const wall_e = new Rover(
  Orientation.North,
  new PositionBuilder(0, 0, mars).build()
);
const transreicever = new TransceiverPassive();
const interpreter = new Interpreter(wall_e);

const controller = new RoverController(interpreter, transreicever);
