import { shallowMount, createLocalVue } from '@vue/test-utils'
import MedicalTitle from '@/components/MedicalTitle.vue'

const localVue = createLocalVue()
const wrapper = shallowMount(MedicalTitle, { localVue })

describe('Medical Title Component', () => {
	it('Should have a section container', () => {
		expect(wrapper.get('#medical-title')).toBeTruthy()
	})

	it('Sets the correct default data', () => {
		expect(typeof MedicalTitle.data).toBe('function')
		const data = MedicalTitle.data()
		expect(data.title).toMatch('Medical Record')
	})
})
