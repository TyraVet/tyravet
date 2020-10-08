import { shallowMount, createLocalVue } from '@vue/test-utils'
import store from '@/store'
import Buefy from 'buefy'
import DeleteConfirmation from '@/components/DeleteConfirmation.vue'

const localVue = createLocalVue()
localVue.use(Buefy)

/* Dummy User */
store.state.user = {
	_id: '',
	username: '',
	type: {},
	token: ''
}

const wrapper = shallowMount(DeleteConfirmation, {
	propsData: {
		type: '',
		objectId: ''
	}, store, localVue })

describe('Delete Confirmation Component', () => {
	const data = DeleteConfirmation.data()
	it('Should set the default data', () => {
		expect(typeof DeleteConfirmation.data).toBe('function')
		expect(data.title).toMatch('Delete Confirmation')
		expect(data.danger).toMatch('Are you sure you want to delete this item? Proceed with caution.')
		expect(data.labelButtonCancel).toMatch('Cancel')
		expect(data.labelButtonAccept).toMatch('Accept')
	})

	const props = wrapper.props()
	it('Should has props data', () => {
		expect(props).toBeTruthy()
		expect(typeof props.type).toBe('string')
		expect(typeof props.objectId).toBe('string')
	})

	const modal = wrapper.get('#delete-confirmation')
	it('Should has a main container', () => {
		expect(modal.exists()).toBeTruthy()
		expect(modal.classes('modal-card')).toBeTruthy()
	})

	const modalHeader = modal.get('.modal-card-head')
	it('Should has a modal Head', () => {
		expect(modalHeader.exists()).toBeTruthy()

		const title = modalHeader.get('.modal-card-title')
		expect(title.exists()).toBeTruthy()
		expect(title.attributes().title).toMatch(data.title)
		expect(title.text()).toMatch(data.title)

		const closeButton = modalHeader.get('button')
		expect(closeButton.exists()).toBeTruthy()
		expect(closeButton.attributes().title).toMatch('Close')
		expect(closeButton.attributes().type).toMatch('button')
	})

	const modalBody = modal.get('.modal-card-body')
	it('Should has a modal Body', () => {
		expect(modalBody.exists()).toBeTruthy()

		const message = modalBody.get('#message')
		expect(message.exists()).toBeTruthy()
		expect(message.classes('is-size-4')).toBeTruthy()
		expect(message.classes('has-text-danger')).toBeTruthy()
		expect(message.attributes().title).toMatch(data.danger)
		expect(message.text()).toMatch(data.danger)
	})

	const modalFooter = modal.get('.modal-card-foot')
	it('Should has a modal Foot', () => {
		expect(modalFooter.exists()).toBeTruthy()

		const cancelButton = modalFooter.get('button')
		expect(cancelButton.exists()).toBeTruthy()
		expect(cancelButton.attributes().title).toMatch(data.labelButtonCancel)
		expect(cancelButton.text()).toMatch(data.labelButtonCancel)

		const acceptButton = modalFooter.get('b-button-stub')
		expect(acceptButton.exists()).toBeTruthy()
		expect(acceptButton.attributes().title).toMatch(data.labelButtonAccept)
		expect(acceptButton.text()).toMatch(data.labelButtonAccept)
	})
})
