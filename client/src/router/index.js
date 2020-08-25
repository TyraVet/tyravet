import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Panel from '../views/Panel.vue'
import Breeds from '../views/Breeds.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import PageNotFound from '../views/PageNotFound.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/panel',
		name: 'panel',
		component: Panel
	},
	{
		path: '/panel/breeds',
		name: 'breeds',
		component: Breeds
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
	},
	{
		path: '*',
		name: 'page-not-found',
		component: PageNotFound
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
