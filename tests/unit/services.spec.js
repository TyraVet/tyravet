import { shallowMount, createLocalVue } from '@vue/test-utils'
import Services from '@/views/Services.vue'
import ServiceHeader from '@/components/ServiceHeader.vue'
import ServiceList from '@/components/ServiceList.vue'

const localVue = createLocalVue()
const wrapper = shallowMount(Services, { localVue })

describe('Services View', () => {
	const main = wrapper.get('#services')

	it('Should has a ServiceHeader Component', () => {
		const serviceHeaderComponent = main.findComponent(ServiceHeader)
		expect(serviceHeaderComponent.exists()).toBeTruthy()
	})

	it('Should has a ServiceList Component', () => {
		const serviceListComponent = main.findComponent(ServiceList)
		expect(serviceListComponent.exists()).toBeTruthy()
	})
})
