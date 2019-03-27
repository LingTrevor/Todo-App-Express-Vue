<template>
  <Container>
    <ul class="todos-list">
      <li
        v-for="todo in allTodos"
        :key="todo._id"
        class="todo"
        :class="{ 'is-done': todo.isDone }"
      >
        {{ todo.title }}
        <i @click="deleteTodo(todo._id)" class="fas fa-trash-alt"></i>
      </li>
    </ul>
  </Container>
</template>

<script>
import Container from "@/components/Container";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Todos",
  components: {
    Container
  },
  methods: {
    ...mapActions(["getTodos", "deleteTodo"])
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.getTodos();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.todos-list {
  min-width: 320px;
  list-style: none;
  padding: 15px;

  .todo {
    border: 1px solid #d03a63;
    border-radius: 10px;
    background-color: #fbecf0;
    max-width: 300px;
    // color: #d03a63;
    color: #922341;
    text-align: center;
    font-weight: bolder;
    font-size: 18px;
    padding: 10px;
    margin-bottom: 15px;
    transition-duration: 0.8s;
    overflow: scroll;

    &:hover {
      color: #fbecf0;
      // background-color: #d03a63;
      background-color: #922341;
      box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }
    i {
      margin-top: 3px;
      margin-left: 3px;
      float: right;
    }
  }

  .is-done {
    text-decoration: line-through;
    background-color: transparent;
    border: 1px dashed #922341;

    &:hover {
      background-color: #fbecf0;
      color: #922341;
    }
  }
}
</style>
