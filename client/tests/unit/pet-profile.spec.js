import { shallowMount, createLocalVue } from '@vue/test-utils'
import store from '@/store'
import PetProfile from '@/components/PetProfile.vue'

const localVue = createLocalVue()

/* dummy user */
store.state.user = {
	_id: '',
	username: '',
	type: {},
	token: ''
}

const wrapper = shallowMount(PetProfile, { store,
										   propsData: { id: '' },
										   localVue })

describe('Pet Component', () => {
	it('Renders a main div container', () => {
		expect(wrapper.get('.pet-profile')).toBeTruthy()
	})

	it('Should have an ID prop data', () => {
		expect(wrapper.props('id')).toMatch('')
	})

	it('Should set the default data', async () => {
		expect(typeof PetProfile.data).toBe('function')
		const data = PetProfile.data()
		expect(data.pet).toMatchObject({
			name: '',
			breed: {
				name: ''
			}
		})
		expect(data.owner).toMatchObject({
			name: '',
			phone: '',
			address: {
				street: '',
				number: '',
				postalCode: ''
			}
		})
	})
})
