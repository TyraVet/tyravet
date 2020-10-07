import { shallowMount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'
import ServiceForm from '@/components/ServiceForm.vue'

const localVue = createLocalVue()
localVue.use(Buefy)
const wrapper = shallowMount(ServiceForm, { localVue })

describe('ServiceForm Component', () => {
	const main = wrapper.get('#service-form')
	it('Should has a main container', () => {
		expect(main.exists()).toBeTruthy()
	})

	const data = ServiceForm.data()
	it('Should set the default data', () => {
		expect(typeof ServiceForm.data).toBe('function')
		expect(data.serviceName).toMatch('')
		expect(data.servicePrice).toBe(0)
		expect(data.title).toMatch('')
		expect(data.labelButtonCancel).toMatch('Cancel')
		expect(data.labelButtonAccept).toMatch('Accept')
		expect(data.status).toBe(0)
	})

	const props = wrapper.props()
	it('Should set default props if not sent', () => {
		expect(props).toBeTruthy()
		expect(props.serviceId).toMatch('')
	})

	const modal = main.get('div')
	it('Should has a modal component', () => {
		expect(modal.exists()).toBeTruthy()
		expect(modal.classes('modal-card')).toBeTruthy()
	})

	const modalHeader = modal.get('.modal-card-head')
	it('Should has a modal Head', () => {
		expect(modalHeader.exists()).toBeTruthy()

		const title = modalHeader.get('.modal-card-title')
		expect(title.exists()).toBeTruthy()
		expect(title.text()).toMatch(data.title)

		const closeButton = modalHeader.get('button')
		expect(closeButton.exists()).toBeTruthy()
	})

	const modalBody = modal.get('.modal-card-body')
	it('Should has a modal Body', () => {
		expect(modalBody.exists()).toBeTruthy()

		const field = modalBody.get('b-field-stub')
		expect(field.exists()).toBeTruthy()
		expect(field.attributes().label).toMatch('Name')

		const input = modalBody.get('b-input-stub')
		expect(input.exists()).toBeTruthy()
		expect(input.attributes().type).toMatch('text')
		expect(input.attributes().required).toBeTruthy()
	})

	const modalFooter = modal.get('.modal-card-foot')
	it('Should has a modal Foot', async () => {
		expect(modalFooter.exists()).toBeTruthy()

		const cancelButton = modalFooter.get('button')
		expect(cancelButton.exists()).toBeTruthy()
		expect(cancelButton.text()).toMatch(data.labelButtonCancel)

		const acceptButton = modalFooter.get('b-button-stub')
		expect(acceptButton.exists()).toBeTruthy()
		expect(acceptButton.text()).toMatch(data.labelButtonAccept)

		await wrapper.setData({ status: 200 })
		const successIcon = modalFooter.get('#success-icon')
		expect(successIcon.exists()).toBeTruthy()
		expect(successIcon.attributes().title).toMatch('Success')
		expect(successIcon.attributes().type).toMatch('is-success')
		expect(successIcon.attributes().pack).toMatch('fas')
		expect(successIcon.attributes().size).toMatch('is-large')
		expect(successIcon.attributes().icon).toMatch('check')

		await wrapper.setData({ status: 401 })
		const errorIcon = modalFooter.get('#error-icon')
		expect(errorIcon.exists()).toBeTruthy()
		expect(errorIcon.attributes().title).toMatch('Error')
		expect(errorIcon.attributes().type).toMatch('is-danger')
		expect(errorIcon.attributes().pack).toMatch('fas')
		expect(errorIcon.attributes().size).toMatch('is-large')
		expect(errorIcon.attributes().icon).toMatch('exclamation')
	})
})
