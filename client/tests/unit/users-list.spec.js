import { shallowMount, createLocalVue } from '@vue/test-utils'
import store from '@/store'
import Buefy from 'buefy'
import UsersList from '@/components/UsersList.vue'

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

const wrapper = shallowMount(UsersList, { store, localVue })

describe('UsersList Component', () => {
	it('Set the correct default data', () => {
		expect(typeof UsersList.data).toBe('function')
		const defaultData = UsersList.data()
		expect(defaultData.users).toEqual(expect.arrayContaining([]))
		expect(defaultData.isBordered).toBeTruthy()
		expect(defaultData.hasMobileCards).toBeTruthy()
	})
})
