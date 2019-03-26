<template>
  <div>
    <h2>{{ filterTitle }}</h2>
    <select @change="todosFilter($event)">
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="25">25</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "TodosFilter",
  props: {
    filterTitle: String
  },
  methods: mapActions(["todosFilter"])
};
</script>

<style scoped lang="scss">
h2 {
  color: #d03a63;
  text-align: center;
  margin-bottom: 15px;
  padding: 15px;
}
select {
  margin-bottom: 15px;
  padding: 15px;
  border: 1px solid #d03a63;
  width: 100%;
  text-align: center;
  outline: none;
}
</style>
