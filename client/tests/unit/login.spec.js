import { shallowMount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'
import Login from '@/views/Login.vue'
import UserForm from '@/components/UserForm.vue'

/* We import createLocalVue to load Buefy and don't
 * have warnings due to its own components. */

const localVue = createLocalVue()
localVue.use(Buefy)
const wrapper = shallowMount(Login, { localVue })

describe('Login Component', () => {
	it('Sets the correct default components', () => {
		expect(typeof Login.components).toBe('object')
		const defaultComponents = Login.components
		expect(defaultComponents.UserForm).toMatchObject(UserForm)
	})
})
