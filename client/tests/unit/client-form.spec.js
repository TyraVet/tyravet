import { shallowMount, createLocalVue } from '@vue/test-utils'
import store from '@/store'
import Buefy from 'buefy'
import ClientForm from '@/components/ClientForm.vue'

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

const wrapper = shallowMount(ClientForm, { store, localVue })

describe('ClientForm Component', () => {
	it('Set the correct default data', () => {
		expect(typeof ClientForm.data).toBe('function')
		const defaultData = ClientForm.data()
		expect(defaultData.clientName).toMatch('')
		expect(defaultData.clientAddressStreet).toMatch('')
		expect(defaultData.clientAddressNumber).toBeNull()
		expect(defaultData.clientAddressIntNumber).toBeNull()
		expect(defaultData.clientAddressPostalCode).toBeNull()
		expect(defaultData.clientPetName).toMatch('')
		expect(defaultData.clientPetAge).toBeNull()
		expect(defaultData.clientPetWeight).toBeNull()
		expect(defaultData.clientPetBirthday).toBeNull()
		expect(defaultData.clientPetBreed).toMatch('')
		expect(defaultData.status).toBeNull()
		expect(defaultData.statusText).toMatch('')
		expect(defaultData.error).toMatch('')
	})

	it('Should have a Success Messages on Create Success Status', async () => {
		wrapper.setData({ status: 201 })
		await wrapper.vm.$nextTick()
		const successMessage = wrapper.get('b-message-stub')
		expect(successMessage.attributes().title).toMatch('Success')
		expect(successMessage.attributes().icon).toMatch('check')
	})

	it('Should have an Error Messages on Create Error Status', async () => {
		wrapper.setData({ status: 401 })
		await wrapper.vm.$nextTick()
		const errorMessage = wrapper.get('b-message-stub')
		expect(errorMessage.attributes().title).toMatch('Error')
		expect(errorMessage.attributes().icon).toMatch('exclamation')
	})
})
