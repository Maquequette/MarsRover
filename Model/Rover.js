"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rover = void 0;
class Rover {
    constructor(orientation, position, planet) {
        this.position = position;
        this.orientation = orientation;
        this.planet = planet;
    }
    getPosition() {
        return this.position;
    }
    getOrientation() {
        return this.orientation;
    }
    turn(degree) {
        this.orientation.setValue(this.orientation.getValue() + degree.getValue());
    }
    move() {
        switch (this.orientation.getValue()) {
            case 90 || -270:
                if (this.planet.isValidPosition(this.position.getX() + 1, this.position.getY())) {
                    this.position.setX(this.position.getX() + 1);
                }
                else {
                    this.position.setX(0);
                }
                break;
            case 180 || -180:
                if (this.planet.isValidPosition(this.position.getX(), this.position.getY() - 1)) {
                    this.position.setY(this.position.getY() - 1);
                }
                else {
                    this.position.setY(0);
                }
                break;
            case 270 || -90:
                if (this.planet.isValidPosition(this.position.getX(), this.position.getY() - 1)) {
                    this.position.setX(this.position.getX() - 1);
                }
                else {
                    this.position.setX(this.planet.getSize().width);
                }
                break;
            case 360 || 0 || -360:
                if (this.planet.isValidPosition(this.position.getX(), this.position.getY() + 1)) {
                    this.position.setY(this.position.getY() + 1);
                }
                else {
                    this.position.setY(this.planet.getSize().height);
                }
                this.orientation.setValue(0);
                break;
        }
        console.log(this.position);
    }
}
exports.Rover = Rover;
