<template>
  <b-container>
    <b-row>
      <b-col>
        <clock :clock="clock" />
      </b-col>
    </b-row>
    <b-row>
      <b-col><Controls :clock="clock"/></b-col>
      <b-col cols="3" align="center">
        <pit :floor-count="floorCount" :people="people" :platform="platform" />
      </b-col>
      <b-col>
        <statistics :people="people" :platform="platform" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Clock from "@/components/atoms/Clock.vue";
import Statistics from "@/components/organisms/Statistics.vue";
import Pit from "@/components/organisms/Pit.vue";
import { Clock as ClockDomain } from "@/domain/clock";
import { People } from "@/domain/people";
import { Platform } from "@/domain/platform";
import Controls from "@/components/organisms/Controls.vue";

@Component({
  components: { Statistics, Clock, Pit, Controls }
})
export default class ThePlatform extends Vue {
  @Prop() private clock!: ClockDomain;
  @Prop() private floorCount!: number;
  @Prop() private people!: People;
  @Prop() private platform!: Platform;
}
</script>

<style scoped lang="scss" />
