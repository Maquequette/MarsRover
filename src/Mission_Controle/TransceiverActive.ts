import { Socket, io } from "socket.io-client";
import { State } from "../Rover/State";

export class TransceiverActive {
  private readonly _socket: Socket;

  constructor() {
    this._socket = io("http://localhost:3000");
  }

  public emitAction(action: string) {
    this._socket.emit("action", action);
  }

  public handleActions(onAction: Function) {
    this._socket.on("states", (states) => {
      console.log("states");
      return onAction(states);
    });
  }

  public handleLanding(onLanding: Function) {
    this._socket.on("landing", (state: State) => {
      return onLanding(state);
    });
  }
}
