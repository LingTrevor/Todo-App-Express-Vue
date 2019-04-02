import axios from "axios";

const state = {
  todos: []
};

const getters = {
  allTodos: state => state.todos
};

const actions = {
  async getTodos({ commit }) {
    const response = await axios.get(`http://localhost:5000/todos`);
    // console.log(response.data);
    commit("setTodos", response.data);
  },
  async addTodo({ commit }, title) {
    const response = await axios.post(`http://localhost:5000/todos/add`, {
      title
    });
    // console.log(response);
    commit("newTodo", response.data);
  },
  async deleteTodo({ commit }, id) {
    await axios.delete(`http://localhost:5000/todos/delete/${id}`);
    // console.log(response.data.success);
    commit("removeTodo", id);
  },
  async todosFilter({ commit }, e) {
    // console.log(parseInt(e.target.value));
    const limit = parseInt(e.target.value);
    const response = await axios.get(
      `http://localhost:5000/todos?limit=${limit}`
    );
    // console.log(response.data);
    commit("setTodos", response.data);
  },
  async updateTodo({ commit }, todo) {
    const response = await axios.put(
      `http://localhost:5000/todos/edit/${todo._id}`
    );
    commit("updTodo", response.data);
  }
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter(todo => todo._id !== id)),
  updTodo: (state, updateTodo) => {
    const index = state.todos.findIndex(todo => todo._id === updateTodo._id);
    if (index !== -1) {
      state.todos.splice(index, 1, updateTodo);
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
