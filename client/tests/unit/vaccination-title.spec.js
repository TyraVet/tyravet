import { shallowMount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'
import VaccinationTitle from '@/components/VaccinationTitle.vue'

const localVue = createLocalVue()
localVue.use(Buefy)
const wrapper = shallowMount(VaccinationTitle, { localVue })

describe('Vaccination Title Component', () => {
	it('Should have a section container', () => {
		expect(wrapper.get('#vaccination-title')).toBeTruthy()
	})

	it('Sets the correct default data', () => {
		expect(typeof VaccinationTitle.data).toBe('function')
		const data = VaccinationTitle.data()
		expect(data.title).toMatch('Vaccination and Deworming Record')
		expect(data.labelButton).toMatch('Add')
	})

	it('Should have an h1 tag as the Title', () => {
		expect(wrapper.get('h1').exists()).toBeTruthy()
		expect(wrapper.get('h1').classes('is-size-2')).toBeTruthy()
		expect(wrapper.get('h1').text()).toMatch('Vaccination and Deworming Record')
	})

	it('Should have a button to Add Log', () => {
		expect(wrapper.get('b-button-stub').exists()).toBeTruthy()
		expect(wrapper.get('b-button-stub').attributes().nativetype).toMatch('button')
		expect(wrapper.get('b-button-stub').attributes().tag).toMatch('button')
		expect(wrapper.get('b-button-stub').attributes().title).toMatch('Add Vaccination/Deworming Log')
		expect(wrapper.get('b-button-stub').attributes().type).toMatch('is-primary')
		expect(wrapper.get('b-button-stub').attributes().size).toMatch('is-medium')
		expect(wrapper.get('b-button-stub').attributes('has-icon')).toMatch('')
		expect(wrapper.get('b-button-stub').attributes().iconpack).toMatch('fas')
		expect(wrapper.get('b-button-stub').attributes().iconleft).toMatch('plus')
		expect(wrapper.get('b-button-stub').text()).toMatch('Add')
	})
})
