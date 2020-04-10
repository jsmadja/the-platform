<template>
  <div>{{ format() }}</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Clock, formatClock } from "@/domain/clock";

@Component
export default class ThePlatform extends Vue {
  @Prop() private clock!: Clock;

  format(): string {
    return formatClock(this.clock);
  }
}
</script>

<style scoped lang="scss" />
