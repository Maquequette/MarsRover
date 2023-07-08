import { PositionBuilder } from "../test/utilities/Builder/PositionBuilder";
import { Rover } from "./Rover/Rover";
import { Coordinate } from "./Topology/Geometry/Coordinate";
import { Orientation } from "./Topology/Geometry/Enum/Orientation";
import { Size } from "./Topology/Geometry/Size";
import { Planet } from "./Topology/Planet/Planet";
import { RoverController } from "./Rover/Decorator/RoverController";

const mars = new Planet(new Size(new Coordinate(10), new Coordinate(10)));
const wall_e = new Rover();
wall_e.land(Orientation.North, new PositionBuilder(0, 0, mars).build());

const controller = new RoverController(wall_e);
controller.connect();
