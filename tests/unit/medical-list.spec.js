import { shallowMount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'
import MedicalList from '@/components/MedicalList.vue'
import ErrorMessage from '@/components/ErrorMessage.vue'

const localVue = createLocalVue()
localVue.use(Buefy)
const wrapper = shallowMount(MedicalList, { localVue })

describe('Medical List Component', () => {
	const main = wrapper.get('#medical-list')

	it('Should set the correct defaul data', () => {
		expect(typeof MedicalList.data).toBe('function')
		const data = MedicalList.data()
		expect(data.records).toEqual(expect.arrayContaining([]))
		expect(data.errorMessage).toMatch('There are no Medical Records for this pet.')
		expect(data.noRecords).toBeTruthy()
	})

	it('Should has a section container', () => {
		expect(main.exists()).toBeTruthy()
	})

	it('Shoudl has an error message if there are no records', () => {
		wrapper.setData({ noRecords: true })

		const errorMessage = main.findComponent(ErrorMessage)
		expect(errorMessage.exists()).toBeTruthy()
	})
})
