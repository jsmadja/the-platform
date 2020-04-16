<template>
  <div class="platform">
    <span class="platform-quantity">{{ platform.foodQuantity }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Platform as PlatformDomain } from "@/domain/platform";

@Component
export default class Platform extends Vue {
  @Prop() private platform!: PlatformDomain;
}
</script>

<style scoped lang="scss">
.platform {
  height: 6px;
  background: green;
  width: $platform-width;
  top: $floor-height / 2 - $platform-height;
  position: relative;

  .platform-quantity {
    color: green;
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
