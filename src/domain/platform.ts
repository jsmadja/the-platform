import {Clock} from "@/domain/clock";
import {getInhabitantsOfFloor, People, onPlatformIsAvailable} from "@/domain/people";

export interface Platform {
  floor: number;
  foodQuantity: number;
}

function goOneFloorDown(platform: Platform, clock: Clock, maxFloorCount: number, people: People) {
  const interval = setInterval(() => {
    platform.floor++;
    getInhabitantsOfFloor(people, platform.floor)
      .forEach(person => onPlatformIsAvailable(person, platform));

    clearInterval(interval);
    if(platform.floor <= maxFloorCount) {
      goOneFloorDown(platform, clock, maxFloorCount, people);
    } else {
      platform.floor = 0;
    }
  }, 2000 / clock.speed);
}

export function startPlatform(platform: Platform, clock: Clock, maxFloorCount: number, people: People) {
  goOneFloorDown(platform, clock, maxFloorCount, people)
}
