<template>
  <div id="nav"><router-link to="/">Home</router-link></div>
  <router-view />
  <div class="home">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div class="hello">
      <input type="text" v-model="todo" name="" id="" />
      <button @click="add">Add todo</button>
      <div v-for="(item, idx) in tasks" :key="idx">
        {{ item }}
        <button @click="deleteTodo(item)">Delete</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapMutations } from "vuex";

export default defineComponent({
  data() {
    return {
      todo: "",
    };
  },
  methods: {
    ...mapMutations({
      addTodos: "addTodo",
      deleteTodo: "deleteItem",
    }),
    add() {
      this.addTodos(this.todo);
      this.todo = "";
    },
  },
  computed: {
    ...mapState({
      tasks: "todos",
    }),
  },
});
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
