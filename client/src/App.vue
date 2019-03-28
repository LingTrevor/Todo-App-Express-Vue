<template>
  <div>
    <AddTodo formTitle="Add Todo" />
    <TodosFilter filterTitle="Filter todos:" />
    <Todos />
  </div>
</template>

<script>
import AddTodo from "@/components/AddTodo";
import Todos from "./components/Todos.vue";
import TodosFilter from "./components/TodosFilter.vue";
export default {
  name: "app",
  components: {
    AddTodo,
    Todos,
    TodosFilter
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  //  background-image: radial-gradient(circle at left top, #ffe2c5, #ffba75);
  background: linear-gradient(to bottom right, #ffe2c5, #ffba75);
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  justify-content: center;
}
</style>
