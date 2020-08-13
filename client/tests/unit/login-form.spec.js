import { shallowMount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'
import LoginForm from '@/components/LoginForm.vue'

/* We import createLocalVue to load Buefy and don't
 * have warnings due to its own components. */

const localVue = createLocalVue()
localVue.use(Buefy)
const wrapper = shallowMount(LoginForm, { localVue })

describe('LoginForm Component', () => {
	it('Sets the correct default data', () => {
		expect(typeof LoginForm.data).toBe('function')
		const defaultData = LoginForm.data()
		expect(defaultData.labelUsername).toMatch('Username')
		expect(defaultData.labelPassword).toMatch('Password')
		expect(defaultData.username).toMatch('')
		expect(defaultData.password).toMatch('')
	})
})
