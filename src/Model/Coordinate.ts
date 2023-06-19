import { Axis } from "../Enum/Axis";

export class Coordinate {

    private readonly _point: number;
    private readonly _axis: Axis;

    constructor(point:number, axis: Axis){
        this._point = point == -0 ? 0 : point;
        this._axis = axis;
    }

    public increment() : Coordinate {
        return new Coordinate(this._point + 1, this._axis)
    }

    public decrement() : Coordinate {
        return new Coordinate(this._point - 1, this._axis)
    }

    public normalize(width: number, height: number): Coordinate {

        switch(this._axis){
            case Axis.LATITUDE:
                let x = ( ((this._point % width) % -width) + width) % width
                return new Coordinate(x, Axis.LATITUDE)

            case Axis.LONGITUDE:
                let y = ( ((this._point % height) % -height) + height) % height
                return new Coordinate(y, Axis.LONGITUDE)
        }
    }
}