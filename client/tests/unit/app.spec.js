import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import router from '@/router'
import Vuex from 'vuex'
import App from '@/App.vue'
import NavBar from '@/components/NavBar.vue'

/* We import createLocalVue to load VueRouter */

const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(Vuex)

const store = new Vuex.Store({
	state: {
		user: null
	},
	mutations: {
		fillUser(state, user){
			state.user = {
				_id: user._id,
				username: user.username,
				token: user.token
			}
		}
	}
})

const wrapper = shallowMount(App, { store, router, localVue })

describe('App Component', () => {
	it('Has components', () => {
		expect(typeof App.components).toBe('object')
	})

	it('Renders a main div container', () => {
		expect(wrapper.get('#app')).toBeTruthy()
	})

	it('Renders NavBar Component', () => {
		const navbarComponent = wrapper.findComponent(NavBar)
		expect(navbarComponent.exists()).toBeTruthy()
	})

	it('Renders Router View Component', () => {
		expect(wrapper.get('#router')).toBeTruthy()
	})
})
