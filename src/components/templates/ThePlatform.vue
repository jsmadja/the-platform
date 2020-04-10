<template>
  <b-container>
    <b-row>
      <b-col>
        <clock :clock="clock" />
      </b-col>
    </b-row>
    <b-row>
      <b-col>Controls</b-col>
      <b-col>The Pit</b-col>
      <b-col>Stats</b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import Clock from "@/components/atoms/Clock.vue";
import { Clock as ClockDomain } from "@/domain/clock";

@Component({
  components: { Clock }
})
export default class ThePlatform extends Vue {
  @Prop() private clock!: ClockDomain;
}
</script>

<style scoped lang="scss" />
