import { shallowMount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'
import VaccinationTitle from '@/components/VaccinationTitle.vue'

const localVue = createLocalVue()
localVue.use(Buefy)
const wrapper = shallowMount(VaccinationTitle, { localVue })

describe('Vaccination Title Component', () => {
	it('Should have a section container', () => {
		expect(wrapper.get('#vaccination-title')).toBeTruthy()
	})

	it('Sets the correct default data', () => {
		expect(typeof VaccinationTitle.data).toBe('function')
		const data = VaccinationTitle.data()
		expect(data.title).toMatch('Vaccination and Deworming Record')
		expect(data.labelButton).toMatch('Add')
	})
})
