<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col>Time</b-col>
    </b-row>
    <b-row>
      <b-col>Controls</b-col>
      <b-col>The Pit</b-col>
      <b-col>Stats</b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ThePlatform extends Vue {}
</script>

<style scoped lang="scss" />
