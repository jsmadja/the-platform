<template>
  <div class="controls">
    Controls
    <Speed :clock="clock" />
    <Events />
    <Actions />
  </div>
</template>

<script>
import Speed from "@/components/atoms/Speed";
import Events from "@/components/molecules/Events";
import Actions from "@/components/molecules/Actions";

export default {
  name: "Controls",
  props: ["clock"],
  components: { Actions, Events, Speed }
};
</script>

<style scoped lang="scss">
.controls {
}
</style>
