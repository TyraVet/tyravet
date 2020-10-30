import { shallowMount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'
import UsersHeader from '@/components/UsersHeader.vue'

/* We import createLocalVue to load Buefy and don't
 * have warnings due to its own components. */

const localVue = createLocalVue()
localVue.use(Buefy)
const wrapper = shallowMount(UsersHeader, { localVue })

describe('UsersHeader Component', () => {
	it('Sets the correct default data', () => {
		expect(typeof UsersHeader.data).toBe('function')
		const defaultData = UsersHeader.data()
		expect(defaultData.title).toMatch('Users')
		expect(defaultData.labelButton).toMatch('Add')
	})
})
