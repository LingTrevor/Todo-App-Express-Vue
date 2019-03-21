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
  min-width: 500px;
  padding: 15px;
  margin-top: 40px;
  min-width: 340px;
}
</style>
