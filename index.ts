import { Orientation } from "./Model/Orientation";
import { Coordinates } from "./Model/Coordinates";
import { Planet } from "./Model/Planet";
import { Rover } from "./Model/Rover";

const orient = new Orientation(0);
const pos = new Coordinates(0, 0);
const plan = new Planet(100, 100);
const rover = new Rover(orient, pos, plan);

rover.turn(new Orientation(90));
rover.move();

rover.setCommands([rover.move.bind(rover), rover.move.bind(rover), rover.move.bind(rover), rover.move.bind(rover)]);
rover.executeCommands();