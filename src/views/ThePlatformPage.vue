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

const MAX_PEOPLE_CAPACITY = 666;
const FLOOR_COUNT = 5;

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
      platform: {floor: 3}
    };
  }
}
</script>
