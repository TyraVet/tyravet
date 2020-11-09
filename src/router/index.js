import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Clients from '@/views/Clients.vue'
import Pets from '@/views/Pets.vue'
import Pet from '@/views/Pet.vue'
import Panel from '@/views/Panel.vue'
import Services from '@/views/Services.vue'
import Breeds from '@/views/Breeds.vue'
import BreedCreate from '@/views/BreedCreate.vue'
import BreedForm from '@/components/BreedForm.vue'
import Login from '@/views/Login.vue'
import PageNotFound from '@/views/PageNotFound.vue'

Vue.use(VueRouter)

const routes = [
	{ path: '/', name: 'home', component: Home, meta: { title: 'Home Page' } },
	{ path: '/clients', name: 'clients', component: Clients, meta: { title: 'Clients' } },
	{ path: '/pets', name: 'pets', component: Pets, meta: { title: 'Pets' } },
	{ path: '/pets/:id', name: 'pet', component: Pet, meta: { title: 'Pet Profile' } },
	{ path: '/panel', name: 'panel', component: Panel, meta: { title: 'Admin Panel' } },
	{ path: '/panel/services', name: 'services', component: Services, meta: { title: 'Services' } },
	{ path: '/panel/breeds', name: 'breeds', component: Breeds, meta: { title: 'Breeds' } },
	{
		path: '/panel/breeds/create',
		name: 'create-breed',
		component: BreedCreate,
		meta: { title: 'Create Breed' }
	},
	{
		path: '/panel/breeds/:id',
		name: 'edit-breed',
		component: BreedForm,
		props: true,
		meta: { title: 'Edit Breed' }
	},
	{ path: '/log-in', name: 'log-in', component: Login, meta: { title: 'Login' } },
	{
		path: '*',
		name: 'page-not-found',
		component: PageNotFound,
		meta: { title: 'Page Not Found' }
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
