<template>
  <footer
    class="footer"
    v-show="isShowFooter"
  >
    <!-- This should be `0 items left` by default -->
    <span class="todo-count"><strong>{{ itemLeft}}</strong> item left</span>

    <!-- Hidden if no completed items are left ↓ -->
    <button
      class="clear-completed"
      v-show="isShowClearComplete"
      @click="clearComplete"
    >Clear completed</button>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    /**
     * getters => vuex中的计算属性
     * computed => vue中的计算属性
     * 将vuex中的计算属性映射到当前的vue实例中，当成计算属性使用
     * 以后使用就不需要：$store.getters.isFooterShow
     * 直接使用 isFooterShow 即可
     * 可以理解为 isFooterShow = $store.getters.isFooterShow
     */
    ...mapGetters(['isShowFooter', 'itemLeft', 'isShowClearComplete'])
  },
  methods: {
    clearComplete () {
      this.$store.commit("clearComplete")
    }
  }
}
</script>

<style>
</style>
