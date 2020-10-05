import { shallowMount, createLocalVue } from '@vue/test-utils'
import ServiceForm from '@/components/ServiceForm.vue'

const localVue = createLocalVue()
const wrapper = shallowMount(ServiceForm, { localVue })

describe('ServiceForm Component', () => {
	const main = wrapper.get('#service-form')
	it('Should has a main container', () => {
		expect(main.exists()).toBeTruthy()
	})
})
