import { Socket, io } from "socket.io-client";

export class TransceiverActive {
  private readonly _socket: Socket;

  constructor() {
    this._socket = io("http://localhost:3000");
  }

  public setAction(action: string) {
    this._socket.emit("action", action);
    // return new Promise((resolve) => {
    //   , (response: any) => {
    //     resolve(response);
    //   });
    // });
  }
}
