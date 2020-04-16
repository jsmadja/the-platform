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
import { People, getInhabitantsOfFloor } from "@/domain/people";
import { Platform as PlatformModel } from "@/domain/platform";
import Floor from "@/components/molecules/Floor.vue";

@Component({
  components: { Floor }
})
export default class Pit extends Vue {
  @Prop() private floorCount!: number;
  @Prop() private people!: People;
  @Prop() private platform!: PlatformModel;

  data() {
    return {
      floors: Array.from(Array(this.floorCount).keys()).map(level => ({
        level: level + 1
      }))
    };
  }

  getInhabitantsOfFloor(floor: number) {
    return getInhabitantsOfFloor(this.people, floor);
  }
}
</script>

<style scoped lang="scss" />
