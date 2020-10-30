import { shallowMount, createLocalVue } from '@vue/test-utils'
import store from '@/store'
import Buefy from 'buefy'
import PetsList from '@/components/PetsList.vue'

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

const wrapper = shallowMount(PetsList, { store, localVue })

describe('PetsList Component', () => {
	it('Set the correct default data', () => {
		expect(typeof PetsList.data).toBe('function')
		const defaultData = PetsList.data()
		expect(defaultData.pets).toEqual(expect.arrayContaining([]))
		expect(defaultData.isBordered).toBeTruthy()
		expect(defaultData.hasMobileCards).toBeFalsy()
	})
})
