import { shallowMount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'
import Appointment from '@/components/Appointment.vue'

const localVue = createLocalVue()
localVue.use(Buefy)

/* Dummy Appointment */
const appointment = {
	service: {
		name: ''
	},
	client: {
		name: '',
		phone: '',
		pets: [{
			name: '',
			breed: {
				name: ''
			}
		}]
	},
	hour: ''
}

const wrapper = shallowMount(Appointment, { propsData: { appointment }, localVue })

describe('Appointment Component', () => {
	it('Shoudl have the appointment Object', () => {
		expect(wrapper.props().appointment).toBeTruthy()
	})

	it('Should have a div wrapper', () => {
		expect(wrapper.find('#appointment')).toBeTruthy()
	})

	/* All text are h3 tags */
	const h3 = wrapper.find('h3')

	it('Should have the service info', () => {
		expect(h3.find('#has-text-primary')).toBeTruthy()
	})

	it('Should have the pet info', () => {
		expect(h3.find('#has-text-dark')).toBeTruthy()
	})

	it('Shoudl have the client info', () => {
		expect(h3.find('#has-text-grey-dark')).toBeTruthy()
	})
})
