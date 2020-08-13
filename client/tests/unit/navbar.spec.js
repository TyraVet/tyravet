import { shallowMount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'
import NavBar from '@/components/NavBar.vue'

/* We import createLocalVue to load Buefy and don't
 * have warnings due to its own components. */

const localVue = createLocalVue()
localVue.use(Buefy)
const wrapper = shallowMount(NavBar, { localVue })

describe('NavBar Component', () => {
	it('Sets the correct default data', () => {
		expect(typeof NavBar.data).toBe('function')
		const defaultData = NavBar.data()
		expect(defaultData.title).toMatch('Tyra Web')
		expect(defaultData.menu).toMatch('Menu')
		expect(defaultData.user).toBeNull()
	})

	it('Has a methods object', () => {
		expect(typeof NavBar.methods).toBe('object')
	})
})
