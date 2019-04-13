import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import VueAnalytics from 'vue-analytics'

const isProd = process.env.NODE_ENV === 'production'

Vue.use(VueAnalytics, {
  id: 'UA-138307154-1',
  router,
  autoTracking: {
    exception: true,
  },
  debug: {
    enabled: !isProd,
    sendHitTask: isProd,
  },
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
