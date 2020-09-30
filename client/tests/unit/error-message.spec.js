import { shallowMount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'
import ErrorMessage from '@/components/ErrorMessage.vue'

const localVue = createLocalVue()
localVue.use(Buefy)
const wrapper = shallowMount(ErrorMessage, {
	propsData: {
		message: 'Hello, Error Message'
	},
	localVue })

describe('Error Message Component', () => {
	const main = wrapper.get('#error-message')

	it('Should receive an String prop as the message to display', () => {
		expect(typeof wrapper.props('message')).toBe('string')
	})

	it('Should has a main section container', () => {
		expect(main.exists()).toBeTruthy()
	})

	it('Should has an icon child component', () => {
		const icon = main.get('b-icon-stub')
		expect(icon.exists()).toBeTruthy()
		expect(icon.attributes().type).toMatch('is-danger')
		expect(icon.attributes().size).toMatch('is-large')
		expect(icon.attributes().pack).toMatch('fas')
		expect(icon.attributes().icon).toMatch('exclamation-circle')
	})

	it('Should has a span container for the error mesasge', () => {
		const messageContainer = main.get('#message')
		expect(messageContainer.exists()).toBeTruthy()

		const message = messageContainer.get('h1')
		expect(message.exists()).toBeTruthy()
		expect(message.classes()).toContain('has-text-black')
		expect(message.classes()).toContain('is-size-5')
	})
})
