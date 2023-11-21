import { Creature } from "./creature";

export class Population {
  creatures: Creature[] = [];

  constructor(number: number = 100) {
    for (let i = 0; i < number; i++) {
      this.creatures.push(new Creature())
    }
  }

  status() {
    console.log("Current population:", this.creatures)
  }
}