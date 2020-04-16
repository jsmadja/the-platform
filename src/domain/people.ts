import * as _ from "lodash";
import {Platform} from "@/domain/platform";

const firstnames = [
  "Gabriel",
  "Alexandre",
  "Arthur",
  "Adam",
  "Raphaël",
  "Louis",
  "Paul",
  "Antoine",
  "Maxime",
  "Thomas"
];

const lastnames = [
  "Petit",
  "Durand",
  "Dubois",
  "Moreau",
  "Lefebvre",
  "Leroy",
  "Roux",
  "Morel",
  "Fournier",
  "Girard"
];

export interface Person {
  id: number;
  firstname: string;
  lastname: string;
  floor: number;
  health: number;
}

export type People = Person[];

export function createInitialPopulation(size: number): People {
  return _
    .range(1, size+1)
    .map(index => ({
      id: index,
      firstname: _.shuffle(firstnames)[0],
      lastname: _.shuffle(lastnames)[0],
      floor: index % 2 === 0 ? index / 2 : (index / 2) + 0.5,
      health: 80
    }));
}

export function getInhabitantsOfFloor(people: People, floor: number) {
  return people.filter(person => person.floor === floor);
}

export function onNewDay(person: Person) {
  person.health--;
}

export function onPlatformIsAvailable(person: Person, platform: Platform) {
  if(platform.foodQuantity >= 1) {
    platform.foodQuantity--;
    person.health++;
  }
}
