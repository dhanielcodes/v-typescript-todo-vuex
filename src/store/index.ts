import { createStore } from 'vuex'


export const store = createStore({
  state: {
    todos: []
  },
  mutations: {
    addTodo(state: any, payload){
      state.todos.unshift(payload)
      payload = ''
    },
    deleteItem(state: any, payload){
      const todoIndex = state.todos.indexOf(payload);
      state.todos.splice(todoIndex, 1);
    }
  },
  actions: {
  },
  modules: {
  }
})
