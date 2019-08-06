<template>
  <header class="header">
    <h1>todos</h1>
    <input
      class="new-todo"
      placeholder="What needs to be done?"
      autofocus
      @keyup.enter="addTodo"
      v-model="todoName"
    />
  </header>
</template>

<script>
export default {
  data () {
    return {
      todoName: ''
    }
  },
  methods: {
    //   添加任务
    addTodo () {
      this.$store.commit('addTodo', {
        todoName: this.todoName
      })
      //   清空
      this.todoName = ''
    }
  }
}
</script>

<style>
</style>
