<template>
  <div class="controls">
    Controls
    <Speed />
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
  components: { Actions, Events, Speed }
};
</script>

<style scoped lang="scss">
.controls {
}
</style>
