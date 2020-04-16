<template>
  <ThePlatform
    :clock="clock"
    :people="people"
    :floor-count="floorCount"
    :platform="platform"
  />
</template>

<script>
import ThePlatform from "@/components/templates/ThePlatform";
import { Component, Vue } from "vue-property-decorator";
import Clock from "@/components/atoms/Clock";
import { createClock, incrementClock, registerEvent } from "@/domain/clock";
import { createInitialPopulation, onNewDay } from "@/domain/people";
import { startPlatform } from "@/domain/platform";

const FLOOR_COUNT = 333;
const INITIAL_PEOPLE_PER_FLOOR = 2;
const MAX_PEOPLE_CAPACITY = FLOOR_COUNT * INITIAL_PEOPLE_PER_FLOOR;
const UNFOODABLE_FLOOR_COUNT = 51;
const INITIAL_FOOD_QUANTITY =
  FLOOR_COUNT - UNFOODABLE_FLOOR_COUNT * INITIAL_PEOPLE_PER_FLOOR;

function update(clock) {
  const interval = setInterval(() => {
    incrementClock(clock);
    clearInterval(interval);
    update(clock);
  }, 1000 / clock.speed);
}

function eventOnNewDay(people) {
  console.log("A brand new day!");
  people.forEach(person => onNewDay(person));
}

function onMorning() {
  console.log("Good Morning!");
}

function onNoon(platform, clock, maxFloorCount, people) {
  console.log("It's time to eat, ... or not!");
  platform.foodQuantity = INITIAL_FOOD_QUANTITY;
  startPlatform(platform, clock, maxFloorCount, people);
}

const platform = {
  floor: 0,
  foodQuantity: INITIAL_FOOD_QUANTITY
};

const people = createInitialPopulation(MAX_PEOPLE_CAPACITY);

const clock = createClock();
registerEvent(clock, "00:00", () => eventOnNewDay(people));
registerEvent(clock, "08:00", onMorning);
registerEvent(clock, "12:00", () =>
  onNoon(platform, clock, FLOOR_COUNT, people)
);

@Component({
  components: { Clock, ThePlatform }
})
export default class ThePlatformPage extends Vue {
  mounted() {
    update(this.clock);
  }

  data() {
    return {
      clock: clock,
      people: people,
      floorCount: FLOOR_COUNT,
      platform
    };
  }
}
</script>
