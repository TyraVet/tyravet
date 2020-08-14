import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import App from '@/App.vue'
import NavBar from '@/components/NavBar.vue'

/* We import createLocalVue to load VueRouter */

const localVue = createLocalVue()
localVue.use(VueRouter)
const wrapper = shallowMount(App, { localVue })

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
