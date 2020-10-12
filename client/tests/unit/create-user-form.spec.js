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
	const main = wrapper.get('#create-user-form')

	const modal = main.get('div')

	const modalHeader = modal.get('.modal-card-head')

	const modalBody = modal.get('.modal-card-body')

	const modalFooter = modal.get('.modal-card-foot')

	it('Set the correct default data', () => {
		expect(typeof CreateUserForm.data).toBe('function')
		const defaultData = CreateUserForm.data()
		expect(defaultData.title).toMatch('')
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

	it('Should change title and change password label if ID is sent', async () => {
		const title = modalHeader.get('.modal-card-title')
		expect(title.text()).toMatch('Create User')

		/* Send ID on mount */
		const wrapper2 = shallowMount(CreateUserForm, {
			propsData: {
				userId: 'test'
			}, store, localVue })
		const main2 = wrapper2.get('#create-user-form')
		const modal2 = main2.get('div')
		const modalHeader2 = modal2.get('.modal-card-head')
		const modalBody2 = modal2.get('.modal-card-body')

		expect(modalHeader2.get('.modal-card-title').text()).toMatch('Edit User')
		expect(modalBody2.get('#change-password').exists()).toBeTruthy()
	})

	it('Should has an init method', () => {
		expect(wrapper.vm.init).toBeTruthy()
	})

	it('Should has a close method', () => {
		expect(wrapper.vm.close).toBeTruthy()
	})

	it('Should has a send method', () => {
		expect(wrapper.vm.send).toBeTruthy()
	})
})
