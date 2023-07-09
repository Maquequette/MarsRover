import { PositionBuilder } from "../test/utilities/Builder/PositionBuilder";
import { Rover } from "./Rover/Rover";
import { Orientation } from "./Topology/Geometry/Enum/Orientation";
import { Planet } from "./Topology/Planet/Planet";
import { RoverController } from "./Rover/Decorator/RoverController";
import { TransceiverPassive } from "./Rover/TransceiverPassive";
import { Interpreter } from "./Rover/Decorator/Interpreter";
import { SizeBuilder } from "../test/utilities/Builder/SizeBuilder";

const mars = new Planet(new SizeBuilder(10, 10).build());
const wall_e = new Rover();
const controller = new RoverController(
  new Interpreter(wall_e),
  new TransceiverPassive()
);
controller.connect();
wall_e.land(Orientation.North, new PositionBuilder(0, 0, mars).build());
