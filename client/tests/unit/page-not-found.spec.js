import { shallowMount, createLocalVue } from '@vue/test-utils'
import PageNotFound from '@/views/PageNotFound.vue'

/* We import createLocalVue to load VueRouter */

const localVue = createLocalVue()
const wrapper = shallowMount(PageNotFound, { localVue })

describe('PageNotFound Component', () => {
	it('Renders a main div container', () => {
		expect(wrapper.get('.page-not-found')).toBeTruthy()
	})
})
