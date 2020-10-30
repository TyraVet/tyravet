import { shallowMount, createLocalVue } from '@vue/test-utils'
import store from '@/store'
import Buefy from 'buefy'
import ClientList from '@/components/ClientList.vue'
import ErrorMessage from '@/components/ErrorMessage.vue'

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
		const data = ClientList.data()
		expect(data.clients).toEqual(expect.arrayContaining([]))
		expect(data.isBordered).toBeTruthy()
		expect(data.hasMobileCards).toBeTruthy()
		expect(data.errorMessage).toMatch("You don't have Clients now. Add One!")
		expect(data.noClients).toBeTruthy()
	})

	it('Should have an Error Messages if There are no Clients', async () => {
		await wrapper.setData({ noClients: true })

		const errorMessage = wrapper.findComponent(ErrorMessage)
		expect(errorMessage.exists()).toBeTruthy()
	})
})
