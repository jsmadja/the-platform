<template>
  <div>
    <div class="floor">
      <span class="floor-number">{{ level }}</span>
      <platform v-show="platformIsHere()" :platform="platform" />
      <div v-show="!platformIsHere()" class="hole" />
      <inhabitant
        v-for="inhabitant in inhabitants"
        :key="inhabitant.id"
        :inhabitant="inhabitant"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Platform from "@/components/atoms/Platform.vue";
import Inhabitant from "@/components/atoms/Inhabitant.vue";
import { Platform as PlatformModel } from "@/domain/platform";
import { People } from "@/domain/people";

@Component({
  components: { Platform, Inhabitant }
})
export default class Floor extends Vue {
  @Prop() private level!: number;
  @Prop() private platform!: PlatformModel;
  @Prop() private inhabitants!: People;

  platformIsHere() {
    return this.platform.floor === this.level;
  }
}
</script>

<style scoped lang="scss">
.floor {
  background: $wall-color;
  border-color: #95afc0;
  border-top-width: 2px;
  border-right-width: 2px;
  border-left-width: 2px;
  border-bottom-width: 0;
  border-style: solid;
  width: $floor-width;
  height: $floor-height;
  line-height: $floor-height/2;
  font-size: 12px;
}

.hole {
  border-style: solid;
  border-color: $wall-color;
  border-width: 1px;
  width: $hole-width;
  top: $floor-height/2 - 2;
  position: relative;
}

.floor-number {
  position: relative;
  top: $floor-height/4;
}
</style>
