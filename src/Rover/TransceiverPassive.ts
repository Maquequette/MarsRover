import { Server } from "socket.io";
import { createServer, Server as HttpServer } from "http";
import { Actions } from "./Enum/Actions";
import { State } from "./State";

export class TransceiverPassive {
  private readonly _io: Server;
  private readonly _server: HttpServer;

  public constructor() {
    this._server = createServer();
    this._io = new Server(this._server, { cors: { origin: "*" } });
  }

  public listen() {
    this._server.listen(3000);
    this._io.on("connection", () => {
      this.emitStates;
    });
  }

  public handleCommand(onReceive: (command: Actions) => void) {
    this._io.on("connection", (socket) => {
      socket.on("action", (action) => {
        onReceive(action);
      });
    });
  }

  public emitStates(states: Array<State | Error>) {
    this._io.on("connection", (socket) => {
      socket.emit("states", states);
    });
  }
}
