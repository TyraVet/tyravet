import { shallowMount, createLocalVue } from '@vue/test-utils'
import store from '@/store'
import Buefy from 'buefy'
import NavBar from '@/components/NavBar.vue'

/* We import createLocalVue to load Buefy and don't
 * have warnings due to its own components. */

const localVue = createLocalVue()
localVue.use(Buefy)

const wrapper = shallowMount(NavBar, { store, localVue })

describe('NavBar Component', () => {
	it('Sets the correct default data', () => {
		expect(typeof NavBar.data).toBe('function')
		const defaultData = NavBar.data()
		expect(defaultData.title).toMatch('Tyra Web')
		expect(defaultData.menu).toMatch('Menu')
		expect(wrapper.vm.$store.state.sideBarOpen).toBeFalsy()
	})

	it('Has a methods object', () => {
		expect(typeof NavBar.methods).toBe('object')
	})

	it('Should open and close the Sidebar on Store Commit', async () => {
		expect(wrapper.vm.$store.state.sideBarOpen).toBeFalsy()
		await wrapper.vm.changeSideBarState()
		expect(wrapper.vm.$store.state.sideBarOpen).toBeTruthy()
		await wrapper.vm.changeSideBarState()
		expect(wrapper.vm.$store.state.sideBarOpen).toBeFalsy()
	})
})
