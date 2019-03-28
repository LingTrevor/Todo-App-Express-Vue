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
div {
  display: grid;
  justify-items: center;
  margin-bottom: 20px;

  h2 {
    color: #d03a63;
    text-align: center;
    margin-bottom: 15px;
    padding: 15px;
  }
  select {
    margin-bottom: 15px;
    border: 1px solid #d03a63;
    background-color: #fbecf0;
    min-width: 290px;
    text-align: center;
    outline: none;
    height: 35px;
    font-size: 18px;

    &:hover {
      box-shadow: 0 0 20px 0 rgba(208, 58, 99, 0.5);
      cursor: pointer;
    }

    @media screen and(max-width: 768px) {
      background-color: #fbecf0;
      border-radius: 10px;

      &:hover {
        box-shadow: none;
      }
    }
    @media screen and(max-width: 576px) {
      background-color: #fbecf0;
      border-radius: 10px;

      &:hover {
        box-shadow: none;
      }
    }
    @media screen and(max-width: 320px) {
      background-color: #fbecf0;
      border-radius: 10px;

      &:hover {
        box-shadow: none;
      }
    }
  }
}
</style>
