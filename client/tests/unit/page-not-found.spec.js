import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import PageNotFound from '@/views/PageNotFound.vue'

/* We import createLocalVue to load VueRouter */

const localVue = createLocalVue()
localVue.use(VueRouter)
const wrapper = shallowMount(PageNotFound, { localVue })

describe('PageNotFound Component', () => {
	it('Renders a main div container', () => {
		expect(wrapper.get('.page-not-found')).toBeTruthy()
	})
})
