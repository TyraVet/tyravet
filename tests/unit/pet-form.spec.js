import { shallowMount, createLocalVue } from '@vue/test-utils'
import store from '@/store'
import Buefy from 'buefy'
import PetForm from '@/components/PetForm.vue'

const localVue = createLocalVue()
localVue.use(Buefy)

/* Dummy User */
store.state.user = {
	_id: '',
	username: '',
	type: {},
	token: ''
}

const wrapper = shallowMount(PetForm, { store, localVue })

describe('Pet Form', () => {
	it('Shoudl set the correct default data', () => {
		expect(typeof PetForm.data).toBe('function')
		const defaultData = PetForm.data()
		expect(defaultData.title).toMatch('Add Pet')
		expect(defaultData.breeds).toEqual(expect.arrayContaining([]))
		expect(defaultData.petName).toMatch('')
		expect(defaultData.petAge).toBeNull()
		expect(defaultData.petWeight).toBeNull()
		expect(defaultData.petBirthday).toBeNull()
		expect(defaultData.petBreed).toMatch('')
	})
})
