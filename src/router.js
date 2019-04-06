import Vue from 'vue'
import Router from 'vue-router'
import Welcome from "./views/Welcome";
import Dashboard from "./views/Dashboard";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'welcome',
            component: Welcome
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard
        }
    ]
})
