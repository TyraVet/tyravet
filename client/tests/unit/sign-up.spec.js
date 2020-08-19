import { shallowMount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'
import SignUp from '@/views/SignUp.vue'
import SignUpForm from '@/components/SignUpForm.vue'

/* We import createLocalVue to load Buefy and don't
 * have warnings due to its own components. */

const localVue = createLocalVue()
localVue.use(Buefy)
const wrapper = shallowMount(SignUp, { localVue })

describe('SignUp Component', () => {
	it('Sets the correct default components', () => {
		expect(typeof SignUp.components).toBe('object')
		const defaultComponents = SignUp.components
		expect(defaultComponents.SignUpForm).toMatchObject(SignUpForm)
	})
})
