<template>
  <label class="speed">
    Speed:
    <select class="choices">
      <option>1x</option>
      <option>5x</option>
      <option>10x</option>
      <option>50x</option>
    </select>
  </label>
</template>

<script>
export default {
  name: "Speed"
};
</script>

<style scoped lang="scss">
.speed {
  display: block;
}
</style>
