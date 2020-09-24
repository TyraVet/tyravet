import { shallowMount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'
import VaccinationList from '@/components/VaccinationList.vue'

const localVue = createLocalVue()
localVue.use(Buefy)
const wrapper = shallowMount(VaccinationList, { localVue })

describe('Vaccination List Component', () => {
	it('Should have a main section container', () => {
		expect(wrapper.get('#vaccination-list')).toBeTruthy()
	})
})
