import { Server } from "socket.io";
import { Rover } from "../Rover";
import { RoverInterface } from "../Interface/RoverInterface";
import { State } from "../State";

export class TransceiverPassive implements RoverInterface {
  private readonly _rover: RoverInterface;
  private readonly _io: Server;

  public constructor(rover: Rover) {
    this._rover = rover;
    this._io = new Server();
  }

  public listen() {
    this._io.listen(3000);
    this._io.on("command", (command) => {
      //console.log(command);
    });
  }

  turnRight(): State {
    this._io.emit("turnRight");
    return this._rover.turnRight();
  }

  turnLeft(): State {
    this._io.emit("turnLeft");
    return this._rover.turnLeft();
  }
  moveForward(): State {
    this._io.emit("moveForward");
    return this._rover.turnRight();
  }
  moveBackward(): State {
    this._io.emit("moveBackward");
    return this._rover.turnRight();
  }
}
