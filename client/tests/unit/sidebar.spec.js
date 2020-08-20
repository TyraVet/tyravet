import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Buefy from 'buefy'
import SideBar from '@/components/SideBar.vue'

/* We import createLocalVue to load Buefy and don't
 * have warnings due to its own components. */

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Buefy)

const store = new Vuex.Store({
	state: {
		open: false
	},
	mutations: {
		changeSideBarState(state){
			if(state.sideBarOpen)
				state.sideBarOpen = false
			else if(!state.sideBarOpen)
				state.sideBarOpen = true
		}
	}
})

const wrapper = shallowMount(SideBar, { store, localVue })

describe('SideBar Component', () => {
	it('Sets the correct default data', () => {
		expect(typeof SideBar.data).toBe('function')
		const defaultData = SideBar.data()
		expect(defaultData.open).toBeFalsy()
		expect(defaultData.fullwidth).toBeTruthy()
		expect(defaultData.fullheight).toBeTruthy()
	})
})
