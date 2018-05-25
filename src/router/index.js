import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Pricing from '@/components/Pricing'
import SelectedPlan from '@/components/SelectedPlan'
import ContactUs from '@/components/ContactUs'

Vue.use(Router)

const router = new Router({
  mode: "history",
});

export default new Router({
  routes: [
    { path: '/', name: 'HelloWorld', component: HelloWorld },
    { path: '/Pricing', name: 'Pricing', component: Pricing },
    { path: '/contact-us', name: 'ContactUs', component: ContactUs },
    { path: '/selected-plan/:finalPrice/:selectInterval', name: 'SelectedPlan', component: SelectedPlan },
  ]
})
