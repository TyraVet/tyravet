import { shallowMount, createLocalVue } from '@vue/test-utils'
import store from '@/store'
import Buefy from 'buefy'
import CreateUserForm from '@/components/CreateUserForm.vue'

/* We import createLocalVue to load Buefy and store */
const localVue = createLocalVue()
localVue.use(Buefy)

/* Dummy User */
store.state.user = {
	_id: '',
	username: '',
	type: { name: '' },
	token: ''
}

const wrapper = shallowMount(CreateUserForm, { store, localVue })

describe('CreateUserForm Component', () => {
	it('Set the correct default data', () => {
		expect(typeof CreateUserForm.data).toBe('function')
		const defaultData = CreateUserForm.data()
		expect(defaultData.title).toMatch('Create User')
		expect(defaultData.username).toMatch('')
		expect(defaultData.password).toMatch('')
		expect(defaultData.confirmPassword).toMatch('')
		expect(defaultData.validationMessageConfirmPassword).toMatch('')
		expect(defaultData.status).toBeNull()
		expect(defaultData.statusText).toMatch('')
		expect(defaultData.error).toMatch('')
		expect(defaultData.type).toMatch('medic')
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
