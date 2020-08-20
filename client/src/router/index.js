import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PageNotFound from '../views/PageNotFound.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '*',
		name: 'page-not-found',
		component: PageNotFound
	},
	{
		path: '/log-in',
		name: 'log-in',
		component: Login
	},
	{
		path: '/sign-up',
		name: 'sign-up',
		component: SignUp
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
