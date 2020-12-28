import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import { Message, Confirm } from '@ss/mtd-vue';

// // 引入 MTDUI 2.0 样式
// import '@ss/mtd-vue/lib/theme2/index.css'

// // 引入组件库
// import MTD from '@ss/mtd-vue'


// Vue.use(MTD)
// Vue.prototype.$mtd = {
//   message: Message,
//   confirm: Confirm,
// };

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
