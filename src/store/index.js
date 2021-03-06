import { createStore } from 'vuex'

export default createStore({

  // 定义所需要的状态的
  state: {
    list: [
      {
        title: "今日待办事项",
        done: false,
      },
      {
        title: "未完成",
        done: false,
      },
      {
        title: "已完成",
        done: true,
      },
    ]
  },

  // 同步修改 state 都是方法，不能有 定时器，请求等异步操作
  // 第一个参数 state 第二个参数 [payload] 是需要修改的值 
  mutations: {

    // 添加一条
    addOneTodo(state, payload) {
      console.log('store index.js addOneTodo 新增一条', state, payload);
      state.list.unshift(payload)

      // 有重复的 todo 阻止添加
      let flag = true
      if (true) {
        list.value.map(item => {
          if (item.title === value.value) {
            flag = false
            alert('todo 已存在')
          }
        })
      }
    },

    // 删除一条
    delOneTodo(state, payload) {
      console.log('store index.js delOneTodo 删除一条', state, payload);
      state.list.splice(payload, 1)
    },

    tapListItem(state, payload) {
      console.log('store index.js tapListItem 排序？', state, payload);

      payload.done = !(payload.done)
      // return
      // state.list[payload].done = !(state.list[payload].done)
      // 做个已完成 排序好了
      // setTimeout(function () {
      //   state.list.splice(payload, 1)
      // }, 3000)
    },

    clear(state, payload) {
      // 把过滤之后的数组传进来
      state.list = payload
    }
  },

  // 异步提交 mutation 可以发请求了，定时器
  // 第一个参数是 store 第二个参数是修改的值
  actions: {
    asyncSetName(store, params) {
      setTimeout(() => {

        // commit 是提交 mutation 调用 mutation 的方法
        store.commit('setName', params)
      }, 3000)
    }
  },

  // 模块化
  modules: {
  }
})
