<template>
  <section class="main">
    <input
      id="toggle-all"
      class="toggle-all"
      type="checkbox"
    />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <!-- These are here just to show the structure of the list items -->
      <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
      <li
        :class="{completed:item.done,editing:editId==item.id}"
        v-for="item in $store.state.list"
        :key="item.id"
      >
        <div class="view">
          <input
            class="toggle"
            type="checkbox"
            :checked="item.done"
            @input="stateChange(item.id)"
          />
          <label @dblclick="showEdit(item.id)">{{ item.name }}</label>
          <button
            @click="delTodo(item.id)"
            class="destroy"
          ></button>
        </div>
        <input
          class="edit"
          :value="item.name"
          @keyup.enter="hideEdit"
        />
      </li>

    </ul>
  </section>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
export default {
  data () {
    return {
      editId: -1
    }
  },
  methods: {
    //   将vuex中mutations中的方法映射到当前vue实例中的methods中
    // 映射完之后的mutations中的方法就相当于是vue中的 方法
    ...mapMutations(['delTodo', 'stateChange', 'updateName']),
    // 取别名
    ...mapMutations({
      // 键 ：别名
      // 值： 之前的函数名
      deltodo: 'delTodo',
      statechange: 'stateChange'
    }),
    ...mapActions(['asyncDelTodo']),
    // 取别名
    ...mapActions({
      adt: 'asyncDelTodo'
    }),
    // 
    //   显示编辑框
    showEdit (id) {
      this.editId = id
    },
    // 隐藏编辑框
    hideEdit (e) {
      // 修改任务内容
      //   this.$store.commit('updateName', {
      //     id: this.editId,
      //     name: e.target.value
      //   })
      this.updateName({
        id: this.editId,
        name: e.target.value
      })
      // 隐藏编辑框
      this.editId = -1
    },
    // 删除任务
    delTodo (id) {
      // commit调用的是mutation中的方法
      //   this.$store.commit('delTodo', { id })
      //   this.delTodo({ id })// 名字相同 死循环了  起个别名
      this.deltodo({ id })
      // 调用actions中的方法要使用dispatch
      //   this.$store.dispatch("asyncDelTodo", { id })
      this.adt({ id })
    },
    // 修改状态
    stateChange (id) {
      //  把当前的id传给mutation 让mutation修改
      this.statechange({ id })
    }
  }
}
</script>

<style>
</style>
