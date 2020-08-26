import { shallowMount, createLocalVue } from '@vue/test-utils'
import store from '@/store'
import Buefy from 'buefy'
import BreedForm from '@/components/BreedForm.vue'

/* We import createLocalVue to load Buefy and store */
const localVue = createLocalVue()
localVue.use(Buefy)

const wrapper = shallowMount(BreedForm, { store, localVue })

describe('BreedForm Component', () => {
	it('Set the correct default data', () => {
		expect(typeof BreedForm.data).toBe('function')
		const defaultData = BreedForm.data()
		expect(defaultData.name).toMatch('')
		expect(defaultData.status).toBeNull()
		expect(defaultData.statusText).toMatch('')
		expect(defaultData.error).toMatch('')
	})
})
