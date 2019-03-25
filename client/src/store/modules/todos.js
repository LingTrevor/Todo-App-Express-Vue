import axios from 'axios';

const state = {
    todos: [],
    messages: []
};

const getters = {
    allTodos: (state) => state.todos
};

const actions = {
    async getTodos({ commit }) {
        const response = await axios.get(`http://localhost:5000/todos`);
        console.log(response.data);
        commit('setTodos', response.data);
    },
    async addTodo({ commit }, title) {
        const response = await axios.post(`http://localhost:5000/todos/add`, {title});
        console.log(response);
        commit('newTodo', response.data);
    }
};

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo)
};

export default {
    state,
    getters,
    actions,
    mutations
};