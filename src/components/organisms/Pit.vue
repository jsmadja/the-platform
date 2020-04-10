<template>
  <div>
    <floor
      :key="floor.level"
      v-for="floor in floors"
      :level="floor.level"
      :inhabitants="getInhabitantsOfFloor(floor.level)"
      :platform="platform"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { People } from "@/domain/people";
import { Platform as PlatformModel } from "@/domain/platform";
import Floor from "@/components/molecules/Floor.vue";
import _ from "lodash";

@Component({
  components: { Floor }
})
export default class Pit extends Vue {
  @Prop() private floorCount!: number;
  @Prop() private people!: People;
  @Prop() private platform!: PlatformModel;

  data() {
    return {
      floors: _.range(this.floorCount).map(level => ({ level: level + 1 }))
    };
  }

  getInhabitantsOfFloor(floorNumber: number) {
    return [];
  }
}
</script>

<style scoped lang="scss" />
