import { shallowMount, createLocalVue } from '@vue/test-utils'
import Home from '@/views/Home.vue'

/* We import createLocalVue to load VueRouter */

const localVue = createLocalVue()
const wrapper = shallowMount(Home, { localVue })

describe('Home Component', () => {
	it('Renders a main div container', () => {
		expect(wrapper.get('.home')).toBeTruthy()
	})
})
