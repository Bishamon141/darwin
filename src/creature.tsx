import { randInt } from "three/src/math/MathUtils";
import { WORLD_WIDTH, WORLD_HEIGHT } from "./config"
import { randomColor } from "./utilities";
import * as THREE from 'three';

export class Creature {
  color: string;
  size: number;
  x: number;
  y: number;
  direction: THREE.Vector2;
  body: THREE.LineSegments;

  constructor(color: string = randomColor(), size: number = 10, x: number = randInt(1, WORLD_WIDTH), y: number = randInt(1, WORLD_HEIGHT), direction: THREE.Vector2 = new THREE.Vector2(0, 0), body: THREE.LineSegments = new THREE.LineSegments) {
    this.color = color;
    this.size = size;
    this.x = x;
    this.y = y;
    this.direction = Math.random() > .5 ? direction : direction;
    this.body = body
  }

  move() {
    this.body.position.x += this.direction.x;
    this.body.position.y += this.direction.y;
  }

  status() {
    console.log("Current population:", this.direction)
  }
}