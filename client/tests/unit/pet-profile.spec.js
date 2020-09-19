import { shallowMount, createLocalVue } from '@vue/test-utils'
import PetProfile from '@/components/PetProfile.vue'

const localVue = createLocalVue()
const wrapper = shallowMount(PetProfile, { propsData: { id: '' }, localVue })

describe('Pet Component', () => {
	it('Renders a main div container', () => {
		expect(wrapper.get('.pet-profile')).toBeTruthy()
	})

	it('Should have an ID prop data', () => {
		expect(wrapper.props('id')).toMatch('')
	})
})
