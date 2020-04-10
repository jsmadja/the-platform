<template>
  <ThePlatform :clock="clock" />
</template>

<script>
import ThePlatform from "@/components/templates/ThePlatform";
import { Component, Vue } from "vue-property-decorator";
import Clock from "@/components/atoms/Clock";
import { createClock, incrementClock } from "@/domain/clock";

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
      clock: createClock()
    };
  }
}
</script>
