<template>
  <div class="inhabitant" v-b-tooltip.hover :title="`${inhabitant.firstname} ${inhabitant.lastname} #${inhabitant.id}`" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Person } from "@/domain/people";

@Component
export default class Inhabitant extends Vue {
  @Prop() private inhabitant!: Person;
}
</script>

<style scoped lang="scss">
.inhabitant {
  height: $inhabitant-height;
  background: red;
  width: $inhabitant-width;
  top: $floor-height / 2 - ($inhabitant-height * 2);
  float: left;
  position: relative;
  margin-left: 2px;
  margin-right: 2px;
  display: inline-block;
  cursor: pointer;
}
</style>
