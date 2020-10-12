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
	const data = CreateUserForm.data()
	it('Set the correct default data', () => {
		expect(typeof CreateUserForm.data).toBe('function')
		expect(data.title).toMatch('')
		expect(data.username).toMatch('')
		expect(data.password).toMatch('')
		expect(data.confirmPassword).toMatch('')
		expect(data.validationMessageConfirmPassword).toMatch('')
		expect(data.status).toBeNull()
		expect(data.statusText).toMatch('')
		expect(data.error).toMatch('')
		expect(data.type).toMatch('medic')
	})

	const main = wrapper.get('#create-user-form')
	it('Should has a main container', () => {
		expect(main.exists()).toBeTruthy()
	})

	const modal = main.get('div')
	it('Should has a modal', () => {
		expect(modal.exists()).toBeTruthy()
	})

	const modalHeader = modal.get('.modal-card-head')
	it('Should has a modal Header', () => {
		expect(modalHeader.exists()).toBeTruthy()

		const title = modalHeader.get('.modal-card-title')
		expect(title.exists()).toBeTruthy()
		expect(title.text()).toMatch(data.title)

		const button = modalHeader.get('button')
		expect(button.exists()).toBeTruthy()
		expect(button.attributes().type).toMatch('button')
	})

	const modalBody = modal.get('.modal-card-body')
	it('Should has a modal Body', () => {
		expect(modalBody.exists()).toBeTruthy()

		const usernameLabel = modalBody.get('#username')
		expect(usernameLabel.exists()).toBeTruthy()
		expect(usernameLabel.attributes().label).toMatch('Username')

		const usernameInput = usernameLabel.get('b-input-stub')
		expect(usernameInput.exists()).toBeTruthy()
		expect(usernameInput.attributes().type).toMatch('text')
		expect(usernameInput.attributes().minlength).toMatch('4')
		expect(usernameInput.attributes().required).toBeTruthy()

		const passwordLabel = modalBody.get('#password')
		expect(passwordLabel.exists()).toBeTruthy()
		expect(passwordLabel.attributes().label).toMatch('Password')

		const passwordInput = passwordLabel.get('b-input-stub')
		expect(passwordInput.exists()).toBeTruthy()
		expect(passwordInput.attributes().type).toMatch('password')
		expect(passwordInput.attributes().minlength).toMatch('8')
		expect(passwordInput.attributes().required).toBeTruthy()

		const confirmPassLabel = modalBody.get('#confirm-password')
		expect(confirmPassLabel.exists()).toBeTruthy()
		expect(confirmPassLabel.attributes().label).toMatch('Confirm Password')

		const confirmPassInput = confirmPassLabel.get('b-input-stub')
		expect(confirmPassInput.exists()).toBeTruthy()
		expect(confirmPassInput.attributes().type).toMatch('password')
		expect(confirmPassInput.attributes().minlength).toMatch('8')
		expect(confirmPassInput.attributes().required).toBeTruthy()
	})

	const modalFooter = modal.get('.modal-card-foot')
	it('Should has a modal Footer', () => {
		expect(modalFooter.exists()).toBeTruthy()

		const cancelButton = modalFooter.get('button')
		expect(cancelButton.exists()).toBeTruthy()
		expect(cancelButton.attributes().type).toMatch('button')
		expect(cancelButton.text()).toMatch('Cancel')

		const acceptButton = modalFooter.get('b-button-stub')
		expect(acceptButton.exists()).toBeTruthy()
		expect(acceptButton.classes('button')).toBeTruthy()
		expect(acceptButton.classes('is-success')).toBeTruthy()
		expect(acceptButton.text()).toMatch('Accept')
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
