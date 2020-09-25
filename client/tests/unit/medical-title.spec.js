import { shallowMount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'
import MedicalTitle from '@/components/MedicalTitle.vue'

const localVue = createLocalVue()
localVue.use(Buefy)
const wrapper = shallowMount(MedicalTitle, { localVue })

describe('Medical Title Component', () => {
	it('Should have a section container', () => {
		expect(wrapper.get('#medical-title')).toBeTruthy()
	})

	it('Sets the correct default data', () => {
		expect(typeof MedicalTitle.data).toBe('function')
		const data = MedicalTitle.data()
		expect(data.title).toMatch('Medical Record')
	})

	const main = wrapper.get('#medical-title')

	it('Should have an Stethoscope Icon', () => {
		const icon = main.get('b-icon-stub')
		expect(icon.exists()).toBeTruthy()
		expect(icon.attributes().pack).toMatch('fas')
		expect(icon.attributes().icon).toMatch('stethoscope')
		expect(icon.attributes().size).toMatch('is-large')
		expect(icon.attributes().type).toMatch('is-icon')
	})

	it('Renders the Title', () => {
		const h1 = main.get('h1')
		expect(h1.exists()).toBeTruthy()
		expect(h1.attributes().class).toMatch('is-size-3')
		expect(h1.text()).toMatch('Medical Record')
	})
})
