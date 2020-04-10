<template>
  <label class="speed">
    Speed:
    <b-form-select :model="selected" :options="options" @change="onChange" />
  </label>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Clock } from "@/domain/clock";

@Component
export default class Speed extends Vue {
  @Prop() private clock!: Clock;
  data() {
    return {
      selected: this.clock.speed,
      options: [1, 10, 50, 100].map(value => ({
        value: value,
        text: `${value}x`
      }))
    };
  }
  onChange(speed: number) {
    this.clock.speed = speed;
  }
}
</script>

<style scoped lang="scss">
.speed {
  display: block;
}
</style>
