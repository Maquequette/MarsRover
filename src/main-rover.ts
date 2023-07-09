import { PositionBuilder } from "../test/utilities/Builder/PositionBuilder";
import { Rover } from "./Rover/Rover";
import { Coordinate } from "./Topology/Geometry/Coordinate";
import { Orientation } from "./Topology/Geometry/Enum/Orientation";
import { Size } from "./Topology/Geometry/Size";
import { Planet } from "./Topology/Planet/Planet";
import { RoverController } from "./Rover/Decorator/RoverController";
import { TransceiverPassive } from "./Rover/TransceiverPassive";
import { Interpreter } from "./Rover/Decorator/Interpreter";

const mars = new Planet(new Size(new Coordinate(10), new Coordinate(10)));
const wall_e = new Rover();
const transceiver = new TransceiverPassive();
const interpreter = new Interpreter(wall_e);
const controller = new RoverController(interpreter, transceiver);
wall_e.land(Orientation.North, new PositionBuilder(0, 0, mars).build());
controller.connect();
