import { shallowMount, createLocalVue } from '@vue/test-utils'
import store from '@/store'
import Buefy from 'buefy'
import BreedForm from '@/components/BreedForm.vue'

/* We import createLocalVue to load Buefy and store */
const localVue = createLocalVue()
localVue.use(Buefy)

const wrapper = shallowMount(BreedForm, { store, localVue })

describe('BreedForm Component', () => {
	const main = wrapper.get('#breed-form')
	it('Should has a main container', () => {
		expect(main.exists()).toBeTruthy()
	})

	const data = BreedForm.data()
	it('Set the correct default data', () => {
		expect(typeof BreedForm.data).toBe('function')
		expect(data.title).toMatch('Create Breed')
		expect(data.breedName).toMatch('')
		expect(data.status).toBeNull()
		expect(data.labelButtonCancel).toMatch('Cancel')
		expect(data.labelButtonAccept).toMatch('Accept')
	})

	const props = wrapper.props()
	it('Should set default props if not sent', () => {
		expect(props).toBeTruthy()
		expect(props.breedId).toBeNull()
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

	it('Should has an init method', () => {
		expect(wrapper.vm.init).toBeTruthy()
	})

	it('Should has a close method', () => {
		expect(wrapper.vm.close).toBeTruthy()
	})

	it('Should has a send method', () => {
		expect(wrapper.vm.send).toBeTruthy()
	})

	it('Should has a clearInputs method', () => {
		expect(wrapper.vm.clearInput).toBeTruthy()
	})

	it('Should has a createBreed method', () => {
		expect(wrapper.vm.createBreed).toBeTruthy()
	})

	it('Should has a getBreed method', () => {
		expect(wrapper.vm.getBreed).toBeTruthy()
	})

	it('Should has an updateBreed method', () => {
		expect(wrapper.vm.updateBreed).toBeTruthy()
	})

	it('Should has a setOnSuccess method', () => {
		expect(wrapper.vm.setOnSuccess).toBeTruthy()
	})

	it('Should has a fillOnSuccess method', () => {
		expect(wrapper.vm.fillOnSuccess).toBeTruthy()
	})

	it('Should has a setOnError method', () => {
		expect(wrapper.vm.setOnError).toBeTruthy()
	})
})
