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
import { createClock, incrementClock } from "@/domain/clock";
import { createInitialPopulation } from "@/domain/people";

const FLOOR_COUNT = 333;
const INITIAL_PEOPLE_PER_FLOOR = 2;
const MAX_PEOPLE_CAPACITY = FLOOR_COUNT * INITIAL_PEOPLE_PER_FLOOR;
const UNFOODABLE_FLOOR_COUNT = 51;

@Component({
  components: { Clock, ThePlatform }
})
export default class ThePlatformPage extends Vue {
  mounted() {
    setInterval(() => {
      incrementClock(this.clock);
    }, 1000);
  }

  data() {
    return {
      clock: createClock(),
      people: createInitialPopulation(MAX_PEOPLE_CAPACITY),
      floorCount: FLOOR_COUNT,
      platform: {
        floor: 0,
        foodQuantity:
          FLOOR_COUNT - UNFOODABLE_FLOOR_COUNT * INITIAL_PEOPLE_PER_FLOOR
      }
    };
  }
}
</script>
