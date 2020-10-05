import { shallowMount, createLocalVue } from '@vue/test-utils'
import ServiceForm from '@/components/ServiceForm.vue'

const localVue = createLocalVue()
const wrapper = shallowMount(ServiceForm, { localVue })

describe('ServiceForm Component', () => {
	const main = wrapper.get('#service-form')
	it('Should has a main container', () => {
		expect(main.exists()).toBeTruthy()
	})

	const data = ServiceForm.data()
	it('Should set the default data', () => {
		expect(typeof ServiceForm.data).toBe('function')
		expect(data.serviceName).toMatch('')
		expect(data.servicePrice).toBe(0)
	})

	const props = wrapper.props()
	it('Should set default props if not sent', () => {
		expect(props).toBeTruthy()
		expect(props.serviceId).toMatch('')
	})
})
