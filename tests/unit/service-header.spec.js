import { shallowMount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'
import ServiceHeader from '@/components/ServiceHeader.vue'

const localVue = createLocalVue()
localVue.use(Buefy)

const wrapper = shallowMount(ServiceHeader, { localVue })

describe('Service Header Component', () => {
	const data = ServiceHeader.data()
	it('Should set the correct default data', () => {
		expect(typeof ServiceHeader.data).toBe('function')
		expect(data.title).toMatch('Services')
		expect(data.labelButton).toMatch('Add')
	})

	const main = wrapper.get('#service-header')

	it('Should has a main Section', () => {
		expect(main.exists()).toBeTruthy()
		expect(main.classes()).toContain('title-container')
	})

	const title = main.get('h3')
	it('Should has an h3 tag with the Title', () => {
		expect(title.exists()).toBeTruthy()
		expect(title.classes()).toContain('is-size-4')
		expect(title.classes()).toContain('has-text-primary-dark')
		expect(title.text()).toMatch(data.title)
	})

	const addButton = main.get('b-button-stub')
	it('Should has an Add Button', () => {
		expect(addButton.exists()).toBeTruthy()
		expect(addButton.attributes().type).toMatch('is-primary')
		expect(addButton.attributes().iconpack).toMatch('fas')
		expect(addButton.attributes().iconleft).toMatch('plus')
		expect(addButton.text()).toMatch(data.labelButton)
	})

	it('Should has a launchServiceForm Method', () => {
		expect(wrapper.vm.launchServiceForm).toBeTruthy()
	})
})
