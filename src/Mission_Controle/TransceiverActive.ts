import { Socket, io } from "socket.io-client";
import { Actions } from "../Rover/Enum/Actions";

export class TransceiverActive {
  private readonly _socket: Socket;

  constructor() {
    this._socket = io("http://localhost:8000");
  }

  public setAction(action: Actions): void {
    this._socket.emit("command", action);
  }
}
