import { shallowMount, createLocalVue } from '@vue/test-utils'
import moment from 'moment'
import Buefy from 'buefy'
import store from '@/store'
import AppointmentsList from '@/components/AppointmentsList.vue'

/* We import createLocalVue to load Buefy and store */
const localVue = createLocalVue()
localVue.use(Buefy)

const wrapper = shallowMount(AppointmentsList, { store, localVue })

describe('AppointmentsList Component', () => {
	it('Set the correct default data', () => {
		expect(typeof AppointmentsList.data).toBe('function')
		const defaultData = AppointmentsList.data()
		expect(defaultData.schedule).toMatchObject({})
		expect(defaultData.hours).toEqual(expect.arrayContaining([]))
		expect(defaultData.error).toBeFalsy()
		expect(defaultData.errorMessage).toMatch('No Data Available')
	})
})
