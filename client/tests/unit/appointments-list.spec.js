import { shallowMount, createLocalVue } from '@vue/test-utils'
import moment from 'moment'
import Buefy from 'buefy'
import store from '@/store'
import AppointmentsList from '@/components/AppointmentsList.vue'
import ErrorMessage from '@/components/ErrorMessage.vue'

/* We import createLocalVue to load Buefy and store */
const localVue = createLocalVue()
localVue.use(Buefy)

const wrapper = shallowMount(AppointmentsList, { store, localVue })

describe('AppointmentsList Component', () => {
	const main = wrapper.get('#appointment-list-container')

	it('Set the correct default data', () => {
		expect(typeof AppointmentsList.data).toBe('function')
		const data = AppointmentsList.data()
		expect(data.schedule).toMatchObject({})
		expect(data.hours).toEqual(expect.arrayContaining([]))
		expect(data.error).toBeFalsy()
		expect(data.errorMessage).toMatch('No Data Available'),
		expect(data.noData).toBeTruthy()
	})

	it('Should has an error message on noData', () => {
		wrapper.setData({ noData: true })

		const errorMessage = main.findComponent(ErrorMessage)
		expect(errorMessage.exists()).toBeTruthy()
	})
})
