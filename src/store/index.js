import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList : [
      {
        content:"", 
        done:false
      }
    ]
  },
  getters: {
    allItems : state => state.todoList
  },

  mutations: {
    
    // Add an item to the todo list
    addItem(state, item) {
      state.todoList.push(item)
    },

    removeItem(state, item) {
      state.todoList.splice(state.todoList.indexOf(item), 1)
    }

  },
})
