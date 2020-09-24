import { shallowMount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'
import MedicalList from '@/components/MedicalList.vue'

const localVue = createLocalVue()
localVue.use(Buefy)
const wrapper = shallowMount(MedicalList, { localVue })

describe('Medical List Component', () => {
	it('Should have a section container', () => {
		expect(wrapper.get('#medical-list')).toBeTruthy()
	})
})
