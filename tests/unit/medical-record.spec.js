import { shallowMount, createLocalVue } from '@vue/test-utils'
import MedicalRecord from '@/components/MedicalRecord.vue'
import MedicalTitle from '@/components/MedicalTitle.vue'
import MedicalList from '@/components/MedicalList.vue'

const localVue = createLocalVue()
const wrapper = shallowMount(MedicalRecord, { localVue })

describe('Medical Record Component', () => {
	it('Should has components', () => {
		expect(typeof MedicalRecord.components).toBe('object')
	})

	it('Should have a main section container', () => {
		expect(wrapper.get('#medical-record')).toBeTruthy()
	})

	it('Renders, a MedialTitle Component', () => {
		const medicalTitleComp = wrapper.findComponent(MedicalTitle)
		expect(medicalTitleComp.exists()).toBeTruthy()
	})

	it('Renders a MedicalList Component', () => {
		const medicalListComp = wrapper.findComponent(MedicalList)
		expect(medicalListComp.exists()).toBeTruthy()
	})
})
