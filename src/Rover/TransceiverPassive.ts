import { Server } from "socket.io";

export class TransceiverPassive {
  private readonly _io: Server;

  public constructor() {
    this._io = new Server();
  }

  public listen() {
    this._io.listen(3000);
  }

  public handleCommand(onReceive: Function) {
    this._io.on("command", (command) => {
      onReceive(command);
    });
  }
}
