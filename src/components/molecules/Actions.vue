<template>
  <div class="next-action">
    Next action:
    <label class="radio">
      <input type="radio" name="action" />
      Eat as much as you can
    </label>
    <label class="radio">
      <input type="radio" name="action" />
      Eat only what you need
    </label>
    <label class="radio">
      <input type="radio" name="action" />
      Shit on everything
    </label>
  </div>
</template>

<script>
export default {
  name: "Actions"
};
</script>

<style scoped lang="scss">
.next-action {
  text-align: left;

  .radio {
    display: block;
  }
}
</style>
