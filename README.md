# 初始化项目

- vue create vuex-todos
- npm run serve
- 把一些不用的都删除掉

# 把 之前模板文件都拷贝过来

- section 部分 (结构)
- 再把 css 也都拷贝过来 (样式)
- 并且在 main.js 里面引入

# 组件化改造

- 1. 创建 components 文件夹 > todoHead.vue todoList.vue todoFooter.vue
- 2. 把对应的头部,列表.尾部部分的代码都拷贝到 .vue 文件里面的 template 内部
- 3. 在 app.vue 里面引入组件 `import todoHead from './components/todoHead.vue'`
- 4. 注册组件 :

```js
components: {
  todoHead, todoList, todoFooter
}
```

- 5. 当标签一样使用 : `<todoHead></todoHead>`

# 配置 vuex - 准备了数据

- 安装 : `npm i vuex`
- 对 vuex 进行模块化 : 创建一个文件 store.js
  - 引入 :
  - 创建 store 实例 :
  - 导出 :
- 在 main.js 里引入 store 并且挂载到 vm 上

# 展示数据 到 列表组件里

- 1. 展示列表
- 2. 编辑任务
- 2.1 双击显示编辑框
  - 2.1.1 准备 editId : -1
  - 2.1.2 editing : item.id === editId
  - 2.1.3 双击 => 传 id(2) => this.editId = id(2)
- 2.2 修改数据
- 2.3 回车隐藏编辑框

# 添加任务

# 删除任务

# 修改任务 和 修改状态 - 小心

> 之前使用的 v-model 而 v-modle 直接修改了 vuex 里面 list 的数据

# 计算属性 getters

> vuex 里面没有计算属性 但是,,,,getters 类似 计算属性

# actions

- mutaions 里面不能写异步的 只能写一些同步的修改数据

# 常见的几个辅助函数

- 1. mapGetters

  - 引入 : `import { mapGetters } from 'vuex'`
  - 映射

  ```js
  // getters => vuex 的计算属性
  // computed => vue 的计算属性
  computed : {
    ...mapGetters(['isFooterShow',....])
  }
  // 将 vuex 里面的 计算属性映射到当前vue实例里面
  // 以后使用不再是 $store.getters.isFooterShow  , 而是使用 isFooterShow
  // isFooterShow = $store.getters.isFooterShow
  ```

- 2. mapMutations
  - 2.1 引入 `import { mapMutations } from 'vuex'`
  - 2.2 映射

```js
mutations 是 vuex 的方法
methods 是vue 的方法
methods : {
  // 映射
  // 以后 使用 就是直接  this.delTodo
  ...mapMutaions(['delTodo','stateChange']),
  // 取别名
  ...mapMutations({
    // 键 :别名 , 值: 之前的方法名
    deltodo : 'delTodo',
    statechange: 'stateChange'
  })
}
```

- 3. mapActions
  - 3.1 引入 `import { mapActions } from 'vuex'`
  - 3.2 映射

```js
...mapActions(['asyncDelTodo']),
...mapActions({
  adt :'asyncDelTodo'
})
```

# 反向代理

> 解决跨域问题

- JSONP - get
- CORS - 后台处理
- 反向代理
