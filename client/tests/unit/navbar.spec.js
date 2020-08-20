import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Buefy from 'buefy'
import NavBar from '@/components/NavBar.vue'

/* We import createLocalVue to load Buefy and don't
 * have warnings due to its own components. */

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

const store = new Vuex.Store({
	state: {
		user: null,
		sideBarOpen: false
	},
	mutations: {
		fillUser(state, user){
			state.user = {
				_id: user._id,
				username: user.username,
				token: user.token
			}
		},
		changeSideBarState(state){
			if(state.sideBarOpen)
				state.sideBarOpen = false
			else if(!state.sideBarOpen)
				state.sideBarOpen = true
		}
	}
})

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

	it('Open SideBar', async () => {
		expect(wrapper.vm.$store.state.sideBarOpen).toBeFalsy()
		await wrapper.vm.changeSideBarState()
		expect(wrapper.vm.$store.state.sideBarOpen).toBeTruthy()
	})
})
