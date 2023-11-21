import { Population } from "./population";

export class World {
  width: number;
  height: number;
  population: Population;
  constructor(width = 200, height = 300, population = new Population()) {
    this.width = width;
    this.height = height;
    this.population = population;
  }
}