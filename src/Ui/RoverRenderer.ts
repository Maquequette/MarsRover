import { Orientation } from "../Topology/Geometry/Enum/Orientation";
import { RoverSymbol } from "./Enum/RoverSymbol";

export class RoverRender {
  static getSymbole(orientation: Orientation): string {
    const index = Object.keys(RoverSymbol).indexOf(orientation.toString());
    const symbole = Object.values(RoverSymbol)[index];
    return symbole;
  }
}
