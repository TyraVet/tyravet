import { shallowMount, createLocalVue } from '@vue/test-utils'
import store from '@/store'
import Buefy from 'buefy'
import ClientList from '@/components/ClientList.vue'

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

const wrapper = shallowMount(ClientList, { store, localVue })

describe('ClientList Component', () => {
	it('Set the correct default data', () => {
		expect(typeof ClientList.data).toBe('function')
		const defaultData = ClientList.data()
		expect(defaultData.clients).toEqual(expect.arrayContaining([]))
		expect(defaultData.isBordered).toBeTruthy()
		expect(defaultData.hasMobileCards).toBeTruthy()
		expect(defaultData.noClients).toMatch("You don't have Clients now. Add One!")
	})

	it('Should have an Error Messages if There are no Clients', async () => {
		const errorMessage = wrapper.get('b-message-stub')
		expect(errorMessage.attributes().type).toMatch('is-danger')
		expect(errorMessage.attributes().iconpack).toMatch('fas')
		expect(errorMessage.attributes().iconsize).toMatch('is-large')
		expect(errorMessage.attributes().icon).toMatch('exclamation-circle')
		expect(errorMessage.attributes().class).toMatch('message')
	})
})
