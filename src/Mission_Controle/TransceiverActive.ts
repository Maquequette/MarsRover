import { Socket, io } from "socket.io-client";

export class TransceiverActive {
  private readonly _socket: Socket;

  constructor() {
    this._socket = io("http://localhost:3000");
  }

  public emitAction(action: string) {
    this._socket.emit("action", action);
  }

  public handleState() {
    this._socket.on("state", () => {
      console.log("caca");
    });
  }

  public handleLanding() {
    this._socket.on("landing", () => {
      console.log("caca");
    });
  }
}
