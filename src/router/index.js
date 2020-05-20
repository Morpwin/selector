import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../page/home/Home.vue')
  },
  {
    path: '/result',
    name: 'Result',
    component: () => import('../page/result/Result.vue')
  },
  {
    path: '/item',
    name: 'Item',
    component: () => import('../page/item/Item.vue'),
    children: [{
      path: 'addItem',
      name: "AddItem",
      component: () => import('../page/item/AddItem.vue')
    }]
  }
]

const router = new VueRouter({
  routes
})

export default router
