import { shallowMount, createLocalVue } from '@vue/test-utils'
import store from '@/store'
import Buefy from 'buefy'
import BreedList from '@/components/BreedList.vue'
import TableEditDelete from '@/components/TableEditDelete.vue'

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

const wrapper = shallowMount(BreedList, { store, localVue })

describe('BreedList Component', () => {
	const main = wrapper.get('#breed-list')

	const data = BreedList.data()
	it('Set the correct default data', () => {
		expect(typeof BreedList.data).toBe('function')
		expect(data.breeds).toEqual(expect.arrayContaining([]))
		expect(data.isBordered).toBeTruthy()
		expect(data.hasMobileCards).toBeFalsy()
	})

	it('Should has an init method', () => {
		expect(wrapper.vm.init).toBeTruthy()
	})

	it('Should has a getBreeds method', () => {
		expect(wrapper.vm.getBreeds).toBeTruthy()
	})

	it('Should has a TableEditDelete Components as Childs', () => {
		expect(main.findComponent(TableEditDelete)).toBeTruthy()
	})
})
