import { shallowMount, createLocalVue } from '@vue/test-utils'
import VaccinationRecord from '@/components/VaccinationRecord.vue'
import VaccinationTitle from '@/components/VaccinationTitle.vue'
import VaccinationList from '@/components/VaccinationList.vue'

const localVue = createLocalVue()
const wrapper = shallowMount(VaccinationRecord, { localVue })

describe('Vaccination Record Component', () => {
	it('Should has components', () => {
		expect(typeof VaccinationRecord.components).toBe('object')
	})

	it('Should have a main section container', () => {
		expect(wrapper.get('#vaccination-record')).toBeTruthy()
	})

	it('Renders a VaccinationTitle Component', () => {
		const vaccinationTitleComp = wrapper.findComponent(VaccinationTitle)
		expect(vaccinationTitleComp.exists()).toBeTruthy()
	})

	it('Renders a VaccinationList Component', () => {
		const vaccinationListComp = wrapper.findComponent(VaccinationList)
		expect(vaccinationListComp.exists()).toBeTruthy()
	})
})
