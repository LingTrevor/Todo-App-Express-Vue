<template>
  <div class="container">
    <slot>No Slot Content</slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  margin-top: 30px;
  min-width: 320px;
}
</style>
