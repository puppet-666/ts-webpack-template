import Vue from 'vue'
import Router from 'vue-router'


const routes = [
  {
    path: '/',
    component: ()=>import('../App.vue'),
    name: 'Root',
  }
]

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes,
})