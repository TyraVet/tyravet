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
		expect(wrapper.get('.page-not-found')).toBeTruthy()
	})
})
