import { Coordinate } from '../../src/Geometry/Coordinate';
import { Point } from '../../src/Geometry/Point';
import { Position } from '../../src/Geometry/Position';
import { Obstacle } from '../../src/Model/Obstacle'
import { Planet } from '../../src/Model/Planet';

function generateObstacles(nbIteration: number, planetSize: number, planet: Planet): Array<Obstacle>{

    let obstacles: Array<Obstacle> = [];

    for(let i = 0; i <= nbIteration; i++){
        let rand: number = Math.round(Math.random() * planetSize);
        let obstacle = new Obstacle(
            new Position(
                new Point( new Coordinate(rand), new Coordinate(rand)),
                planet
            )
        );
        obstacles.push(obstacle);
    }

    return obstacles;
}

export {
    generateObstacles
}