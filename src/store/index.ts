import { createStore } from 'vuex'


export const store = createStore({
  state: {
    todos: []
  },
  mutations: {
    addTodo(state: any, payload){
      state.todos.unshift(payload)
      payload = ''
    }
  },
  actions: {
  },
  modules: {
  }
})
