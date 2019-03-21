<template>
  <div>
    <AddPost formTitle="Add Todo" />
  </div>
</template>

<script>
import AddPost from "./components/AddPost.vue";

export default {
  name: "app",
  components: {
    AddPost
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
  height: 100vh;
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
</style>
