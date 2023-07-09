import { Orientation } from "../Topology/Geometry/Enum/Orientation";
import { Symbol } from "./Enum/Symbol";

export class RoverRenderer {
  static getSymbole(orientation: Orientation): Symbol {
    const index = Object.keys(Symbol).indexOf(orientation.toString());
    const symbole = Object.values(Symbol)[index];
    return symbole;
  }
}
