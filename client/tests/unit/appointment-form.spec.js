import { shallowMount, createLocalVue } from '@vue/test-utils'
import store from '@/store'
import Buefy from 'buefy'
import AppointmentForm from '@/components/AppointmentForm.vue'

/* We import createLocalVue to load Buefy and store */
const localVue = createLocalVue()
localVue.use(Buefy)

/* Dummy User */
store.state.user = {
	_id: '',
	username: '',
	type: {},
	token: ''
}

/* Dummy Hour */
const hour = {
	hour: ''
}

const wrapper = shallowMount(AppointmentForm, { propsData: { hour }, store, localVue })

describe('AppointmentForm Component', () => {
	it('Set the correct default data', () => {
		expect(typeof AppointmentForm.data).toBe('function')
		const defaultData = AppointmentForm.data()
		expect(defaultData.title).toMatch('New Appointment')
		expect(defaultData.services).toEqual(expect.arrayContaining([]))
	})
})
