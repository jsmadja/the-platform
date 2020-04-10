import * as _ from "lodash";

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
}

export type People = Person[];

export function createInitialPopulation(size: number): People {
  return _.range(size).map(index => ({
    id: index,
    firstname: _.shuffle(firstnames)[0],
    lastname: _.shuffle(lastnames)[0]
  }));
}
