<template>
  <div class="hello">
    <input type="text" v-model="todo" name="" id="" />
    <button @click="add">Add todo</button>
    <div v-for="(item, idx) in tasks" :key="idx">
      {{ item }}
      <button @click="deleteItem(item)">Delete</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapMutations } from "vuex";

export default defineComponent({
  name: "HelloWorld",
  data() {
    return {
      todo: "",
    };
  },
  methods: {
    ...mapMutations({
      addTodos: "addTodo",
    }),
    add() {
      this.addTodos(this.todo);
      this.todo = "";
    },
    deleteItem(id: any) {
      const todoIndex = this.tasks.indexOf(id);
      this.tasks.splice(todoIndex, 1);
    },
  },
  computed: {
    ...mapState({
      tasks: "todos",
    }),
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
