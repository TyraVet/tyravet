import { shallowMount, createLocalVue } from '@vue/test-utils'
import router from '@/router'
import PageNotFound from '@/views/PageNotFound.vue'

/* We import createLocalVue to load VueRouter */

const localVue = createLocalVue()
const wrapper = shallowMount(PageNotFound, { router, localVue })

describe('PageNotFound Component', () => {
	it('Renders a main div container', () => {
		expect(wrapper.get('.page-not-found')).toBeTruthy()
	})
})
