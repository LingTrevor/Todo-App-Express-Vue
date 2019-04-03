<template>
  <Container>
    <ul class="todos-list">
      <li
        @dblclick="updateTodo(todo)"
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
    ...mapActions(["getTodos", "deleteTodo", "updateTodo"])
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
  padding: 10px;

  .todo {
    border: 1px solid #d03a63;
    border-radius: 10px;
    background-color: #fbecf0;
    max-width: 350px;
    min-width: 320px;
    color: #922341;
    text-align: center;
    font-weight: bolder;
    font-size: 18px;
    padding: 10px;
    margin-bottom: 15px;
    transition-duration: 0.2s;

    &:hover {
      color: #fbecf0;
      background-color: #922341;
      box-shadow: 0 5px 10px 0 rgba(208, 58, 99, 0.2);
      cursor: pointer;
      transform: scale(1.05);
    }

    i {
      margin-top: 3px;
      margin-left: 3px;
      float: right;

      &:active {
        color: #e79aaf;
      }
      &:hover {
        transform: scale(1.4);
        transition: 0.4s linear;
      }
    }

    &.is-done {
      text-decoration: line-through;
      background-color: transparent;
      border: 1px dashed #922341;
      transition-duration: 0.2s;

      &:hover {
        background-color: #fbecf0;
        color: #922341;
      }
    }

    @media screen and(max-width: 768px) {
      &:hover {
        transform: none;
      }
    }
    @media screen and(max-width: 576px) {
      &:hover {
        transform: none;
      }
    }
    @media screen and(max-width: 320px) {
      &:hover {
        transform: none;
      }
    }
  }
}
</style>
