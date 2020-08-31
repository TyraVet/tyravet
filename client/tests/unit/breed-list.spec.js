import { shallowMount, createLocalVue } from '@vue/test-utils'
import store from '@/store'
import Buefy from 'buefy'
import BreedList from '@/components/BreedList.vue'

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

const wrapper = shallowMount(BreedList, { store, localVue })

describe('BreedList Component', () => {
	it('Set the correct default data', () => {
		expect(typeof BreedList.data).toBe('function')
		const defaultData = BreedList.data()
		expect(defaultData.breeds).toEqual(expect.arrayContaining([]))
		expect(defaultData.isBordered).toBeTruthy()
		expect(defaultData.hasMobileCards).toBeFalsy()
	})
})
