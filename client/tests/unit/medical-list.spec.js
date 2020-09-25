import { shallowMount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'
import MedicalList from '@/components/MedicalList.vue'

const localVue = createLocalVue()
localVue.use(Buefy)
const wrapper = shallowMount(MedicalList, { localVue })

describe('Medical List Component', () => {
	const main = wrapper.get('#medical-list')

	it('Should set the correct defaul data', () => {
		expect(typeof MedicalList.data).toBe('function')
		const data = MedicalList.data()
		expect(data.records).toEqual(expect.arrayContaining([]))
		expect(data.noRecords).toMatch('There are no Medical Records for this pet.')
	})

	it('Should has a section container', () => {
		expect(main.exists()).toBeTruthy()
	})

	it('Shoudl has a error message if there are no records', () => {
		const noRecords = main.get('#no-records')
		expect(noRecords.exists()).toBeTruthy()

		const message = noRecords.get('#message-container')
		expect(message.exists()).toBeTruthy()
		expect(message.attributes().type).toMatch('is-danger')
		expect(message.attributes().hasicon).toBeTruthy()
		expect(message.attributes().iconpack).toMatch('fas')
		expect(message.attributes().iconsize).toMatch('is-large')
		expect(message.attributes().icon).toMatch('exclamation-circle')
		expect(message.attributes().class).toMatch('message')

		const messageText = message.get('#message')
		expect(messageText.exists()).toBeTruthy()
		expect(messageText.attributes().class).toMatch('has-text-danger')
		expect(messageText.text()).toMatch('There are no Medical Records for this pet.')
	})
})
