/**
 * 就像是router一样，在一个单独的文件中配置信息
 */

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 将state 和 mutations 抽离出来
const state = {
  list: [
    { id: 1, name: '敲代码', done: true },
    { id: 2, name: '约美眉', done: true },
    { id: 3, name: '看哪吒', done: false }
  ]
}

const mutations = {
  //  添加任务
  addTodo(state, payload) {
    // 处理id
    let id =
      state.list.length === 0 ? 1 : state.list[state.list.length - 1].id + 1
    state.list.push({
      id,
      name: payload.todoName,
      done: false
    })
  },
  //   删除任务
  delTodo(state, payload) {
    /**
     * mutations 中不能使用异步的方法
     * 要想使用异步方法，要在actions中
     */
    // setTimeout(() => {
    state.list = state.list.filter(item => item.id != payload.id)
    // })
  },
  // 修改状态
  stateChange(state, payload) {
    // 找到对应的对象，把状态取反
    let todo = state.list.find(item => item.id == payload.id)
    todo.done = !todo.done
  },
  // 修改任务名
  updateName(state, payload) {
    let todo = state.list.find(item => item.id == payload.id)
    todo.name = payload.name
  },
  //   删除已完成的
  clearComplete(state) {
    state.list = state.list.filter(item => !item.done)
  }
}

// 抽离getters  相当一vue中的计算属性  第一个参数还是state
const getters = {
  // 底部的显示与隐藏
  isShowFooter(state) {
    return state.list.length != 0
  },
  // 未完成个数
  itemLeft(state) {
    return state.list.filter(item => !item.done).length
  },
  //   清除已完成
  isShowClearComplete(state) {
    return state.list.some(item => !item.done)
  }
}
// 抽离actions
const actions = {
  asyncDelTodo(context, payload) {
    setTimeout(() => {
      //  在actions中调用 mutations中的同步方法
      // 因为actions中不建议直接改变状态（操作数据）
      context.commit('delTodo', payload)
    }, 0)
  }
}

const store = new Vuex.Store({
  strict: true,
  state,
  mutations,
  getters,
  actions
})

export default store
