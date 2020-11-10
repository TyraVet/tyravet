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
	})

	const props = wrapper.props()
	it('Should set default props if not sent', () => {
		expect(props).toBeTruthy()
		expect(props.id).toBeNull()
	})

	it('Should has an init method', () => {
		expect(wrapper.vm.init).toBeTruthy()
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
