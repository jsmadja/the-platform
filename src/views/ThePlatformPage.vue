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
const MAX_PEOPLE_CAPACITY = FLOOR_COUNT * 2;

function update(clock) {
  const interval = setInterval(() => {
    incrementClock(clock);
    clearInterval(interval);
    update(clock);
  }, 1000 / clock.speed);
}

@Component({
  components: { Clock, ThePlatform }
})
export default class ThePlatformPage extends Vue {
  mounted() {
    update(this.clock);
  }

  data() {
    return {
      clock: createClock(),
      people: createInitialPopulation(MAX_PEOPLE_CAPACITY),
      floorCount: FLOOR_COUNT,
      platform: { floor: 1 }
    };
  }
}
</script>
