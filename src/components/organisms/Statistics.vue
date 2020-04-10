<template>
  <div>
    <div>Statistics</div>
    <ul>
      <li>Number of people: {{ people.length }}</li>
      <li>Platform floor: {{ platform.floor }}</li>
      <li>Platform food quantity: {{ platform.foodQuantity }}</li>
      <li>
        <b-table striped hover :items="items" sticky-header="300px" small />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { People } from "@/domain/people";
import { Platform } from "@/domain/platform";

@Component
export default class Statistics extends Vue {
  @Prop() private people!: People;
  @Prop() private platform!: Platform;

  data() {
    return {
      items: this.people
    };
  }
}
</script>

<style scoped lang="scss" />
