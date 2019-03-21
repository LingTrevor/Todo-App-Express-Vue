<template>
  <div>
    <Container>
      <div class="add-form">
        <h1>{{ formTitle }}</h1>
        <form @submit.prevent="test">
          <input type="text" v-model="todoTitle" placeholder="Title" />
          <input type="submit" value="Save" />
        </form>
      </div>
    </Container>
    <Container>
      <ul class="todos-list">
        <li v-for="todo in todos" :key="todo.id" class="todo">{{ todo }}</li>
      </ul>
    </Container>
  </div>
</template>

<script>
import Container from "@/components/Container";
export default {
  name: "AddPost",
  components: {
    Container
  },
  props: {
    formTitle: String
  },
  data() {
    return {
      todos: [
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dolorum!"
      ],
      todoTitle: ""
    };
  },
  methods: {
    test() {
      console.log(`${this.todoTitle}`);
      this.todos.push(this.todoTitle);
      this.todoTitle = "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  color: #d03a63;
  text-align: center;
  margin-bottom: 15px;
  padding: 15px;
}

.add-form {
  width: 100%;

  form {
    display: flex;
  }

  input[type="text"] {
    width: 100%;
    height: 40px;
    border: 1px solid #d03a63;
    border-radius: 10px 0 0 10px;
    margin-bottom: 15px;
    font-size: 18px;
    padding: 10px;
    // color: #d03a63;
    color: #922341;
    &:focus {
      outline: none;
    }
  }

  input[type="submit"] {
    border: 1px solid #d03a63;
    border-left: none;
    border-radius: 0 10px 10px 0;
    background-color: #d03a63;
    margin-bottom: 15px;
    width: 80px;
    height: 40px;
    padding: 5px;
    color: #ffffff;
    font-size: 18px;
    font-weight: bolder;
    transition-duration: 0.8s;
    &:focus {
      outline: none;
    }
    &:hover {
      box-shadow: none;
      background-color: #ffe2c5;
      color: #d03a63;
    }
  }
}

.todos-list {
  width: 100%;
  list-style: none;
  padding: 15px;

  .todo {
    border: 1px solid #d03a63;
    border-radius: 10px;
    background-color: #fbecf0;
    // color: #d03a63;
    color: #922341;
    text-align: center;
    font-weight: bolder;
    font-size: 18px;
    padding: 10px;
    margin-bottom: 15px;
    transition-duration: 0.8s;

    &:hover {
      color: #fbecf0;
      // background-color: #d03a63;
      background-color: #922341;
    }
  }
}
</style>
