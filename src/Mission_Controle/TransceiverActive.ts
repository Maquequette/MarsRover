import { Socket, io } from "socket.io-client";

export class TransceiverActive {
  private readonly _socket: Socket;

  constructor() {
    this._socket = io("http://localhost:3000");
  }

  public emitAction(action: string) {
    this._socket.emit("action", action);
  }

  public handleStates(onAction: Function) {
    this._socket.on("states", (states) => {
      onAction(states);
    });
  }
}
