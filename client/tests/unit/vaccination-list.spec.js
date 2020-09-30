import { shallowMount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'
import VaccinationList from '@/components/VaccinationList.vue'
import ErrorMessage from '@/components/ErrorMessage.vue'

const localVue = createLocalVue()
localVue.use(Buefy)
const wrapper = shallowMount(VaccinationList, { localVue })

describe('Vaccination List Component', () => {
	const main = wrapper.get('#vaccination-list')

	it('Should set the correct default data', () => {
		expect(typeof VaccinationList.data).toBe('function')
		const data = VaccinationList.data()
		expect(data.records).toEqual(expect.arrayContaining([]))
		expect(data.errorMessage).toMatch('There are no Vaccination/Deworming Records for this pet. Add one!')
		expect(data.noRecords).toBeTruthy()
	})

	it('Should have a main section container', () => {
		expect(main.exists()).toBeTruthy()
	})

	it('Should has an error message if there are no records', () => {
		wrapper.setData({ noRecords: true })

		const errorMessage = main.findComponent(ErrorMessage)
		expect(errorMessage.exists()).toBeTruthy()
	})
})
