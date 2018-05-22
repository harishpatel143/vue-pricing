import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Pricing from '@/components/Pricing'

Vue.use(Router)

const router = new Router({
  mode: "history"
});

export default new Router({
  routes: [
    { path: '/', name: 'HelloWorld', component: HelloWorld },
    { path: '/Pricing', name: 'Pricing', component: Pricing }
  ]
})
