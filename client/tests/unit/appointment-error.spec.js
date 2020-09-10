import { shallowMount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'
import AppointmentError from '@/components/AppointmentError.vue'

/* We import createLocalVue to load VueRouter */
const localVue = createLocalVue()
localVue.use(Buefy)

const wrapper = shallowMount(AppointmentError, { localVue })

describe('AppointmentError Component', () => {
	it('Should set the correct default data', () => {
		expect(typeof AppointmentError.data).toBe('function')
		const defaultData = AppointmentError.data()
		expect(defaultData.message).toMatch('Error: You can not create new appointments on passed days')
	})
})
