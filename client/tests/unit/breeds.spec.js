import { shallowMount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'
import Breeds from '@/views/Breeds.vue'
import BreedList from '@/components/BreedList.vue'

/* We import createLocalVue to load Buefy and don't
 * have warnings due to its own components. */

const localVue = createLocalVue()
localVue.use(Buefy)
const wrapper = shallowMount(Breeds, { localVue })

describe('Breeds Component', () => {
	it('Sets the correct default data', () => {
		expect(typeof Breeds.data).toBe('function')
		const defaultData = Breeds.data()
		expect(defaultData.title).toMatch('Breeds')
		expect(defaultData.labelButton).toMatch('Add')
	})

	it('Should have a BreedList Component', () => {
		const breedListComponent = wrapper.findComponent(BreedList)
		expect(breedListComponent.exists()).toBeTruthy()
	})
})
