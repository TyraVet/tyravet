import { shallowMount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'
import PickDate from '@/components/PickDate.vue'

/* We import createLocalVue to load Buefy and store */
const localVue = createLocalVue()
localVue.use(Buefy)

const wrapper = shallowMount(PickDate, { localVue })

describe('PickDate Component', () => {
	it('Set the correct default data', () => {
		expect(typeof PickDate.data).toBe('function')
		const defaultData = PickDate.data()
		expect(defaultData.title).toMatch('Select Date')
		expect(defaultData.date).toBeNull()
	})
})
