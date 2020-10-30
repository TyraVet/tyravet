import { shallowMount, createLocalVue } from '@vue/test-utils'
import router from '@/router'
import Buefy from 'buefy'
import PageNotFound from '@/views/PageNotFound.vue'

/* We import createLocalVue to load VueRouter */

const localVue = createLocalVue()
localVue.use(Buefy)
const wrapper = shallowMount(PageNotFound, { router, localVue })

describe('PageNotFound Component', () => {
	it('Renders a main div container', () => {
		expect(wrapper.get('#page-not-found')).toBeTruthy()
	})

	const data = PageNotFound.data()
	it('Should set the default data', () => {
		expect(typeof PageNotFound.data).toBe('function')
		expect(data.title).toMatch('Page Not Found')
		expect(data.labelButton).toMatch('Go Back')
	})
})
