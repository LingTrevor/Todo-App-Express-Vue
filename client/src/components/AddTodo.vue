<template>
  <Container>
    <div class="add-form">
      <h1>{{ formTitle }}</h1>
      <form @submit.prevent="postTodo">
        <input type="text" v-model="todoTitle" placeholder="Title" />
        <input type="submit" value="Save" />
      </form>
    </div>
  </Container>
</template>

<script>
import Container from "@/components/Container";
import { mapActions } from "vuex";
export default {
  name: "AddTodo",
  components: {
    Container
  },
  props: {
    formTitle: String
  },
  data() {
    return {
      todoTitle: ""
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    postTodo() {
      this.addTodo(this.todoTitle);
      this.todoTitle = "";
    }
  }
};
</script>

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
    margin: 0 0 15px 15px;
    font-size: 18px;
    padding: 10px;
    color: #922341;
    &:focus {
      outline: none;
      box-shadow: 0 0 20px 0 rgba(208, 58, 99, 0.5);

      @media screen and(max-width: 768px) {
        box-shadow: none;
      }
      @media screen and(max-width: 576px) {
        box-shadow: none;
      }
      @media screen and(max-width: 320px) {
        box-shadow: none;
      }
    }
  }

  input[type="submit"] {
    border: 1px solid #d03a63;
    border-left: none;
    border-radius: 0 10px 10px 0;
    background-color: #d03a63;
    margin: 0 15px 15px 0;
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
      box-shadow: 0 0 20px 0 rgba(208, 58, 99, 0.5);
      background-color: #ffe2c5;
      color: #d03a63;
      cursor: pointer;
    }
    @media screen and(max-width: 768px) {
      &:hover {
        box-shadow: none;
      }
    }
    @media screen and(max-width: 576px) {
      &:hover {
        box-shadow: none;
      }
    }
    @media screen and(max-width: 320px) {
      &:hover {
        box-shadow: none;
      }
    }
  }
}
</style>
