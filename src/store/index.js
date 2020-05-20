import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations"
import getters from "./getters"
import actions from "./actions"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: "",
    content: "",
    events: [{
      id: 1,
      tip: "今天是学习的好日子",
      content: "背30个英语单词充实自己",
    }, {
      id: 2,
      tip: "今天是上分的好日子",
      content: "加我一个，我玩亚索"
    }, {
      id: 3,
      tip: "今天不宜学习",
      content: "吃喝玩乐，洗洗就睡"
    }, {
      id: 4,
      tip: "今天不宜上分",
      content: "战绩：(0/21/0)"
    }]
  },
  getters,
  mutations,
  actions
})