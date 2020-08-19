import { shallowMount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'
import SignUpForm from '@/components/SignUpForm.vue'

/* We import createLocalVue to load Buefy and don't
 * have warnings due to its own components. */

const localVue = createLocalVue()
localVue.use(Buefy)
const wrapper = shallowMount(SignUpForm, { localVue })

describe('SignUpForm Component', () => {
	it('Sets the correct default data', () => {
		expect(typeof SignUpForm.data).toBe('function')
		const defaultData = SignUpForm.data()
		expect(defaultData.labelUsername).toMatch('Username')
		expect(defaultData.labelPassword).toMatch('Password')
		expect(defaultData.username).toMatch('')
		expect(defaultData.password).toMatch('')
		expect(defaultData.status).toBeNull()
		expect(defaultData.statusText).toMatch('')
		expect(defaultData.error).toMatch('')
	})
})
