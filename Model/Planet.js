"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Planet = void 0;
class Planet {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getSize() {
        return { width: this.width, height: this.height };
    }
    isValidPosition(x, y) {
        return x >= 0 && x < this.width && y >= 0 && y < this.height;
    }
}
exports.Planet = Planet;
