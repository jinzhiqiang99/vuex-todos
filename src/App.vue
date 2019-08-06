<template>
  <div id="app">
    <section class="todoapp">
      <!-- 头部 -->
      <todoHeader></todoHeader>

      <!-- 列表部分 -->
      <todoList></todoList>

      <!-- 底部 -->
      <todoFooter></todoFooter>

    </section>
  </div>
</template>

<script>

// 引入子组件
import todoHeader from './components/todoHeader.vue'
import todoList from './components/todoList.vue'
import todoFooter from './components/todoFooter.vue'

export default {
  name: 'app',
  components: {
    todoHeader, todoList, todoFooter
  }
}
</script>

<style>
</style>
