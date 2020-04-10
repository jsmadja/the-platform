<template>
  <div>{{ format() }}</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Clock as ClockDomain } from "@/domain/clock";

@Component
export default class Clock extends Vue {
  @Prop() private clock!: ClockDomain;

  format(): string {
      return `${this.clock.currentTime.toLocaleDateString()} ${this.clock.currentTime.toLocaleTimeString()}`;
  }
}
</script>

<style scoped lang="scss" />
