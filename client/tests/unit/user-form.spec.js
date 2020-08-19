import { shallowMount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'
import UserForm from '@/components/UserForm.vue'

/* We import createLocalVue to load Buefy and don't
 * have warnings due to its own components. */

const localVue = createLocalVue()
localVue.use(Buefy)
const wrapper = shallowMount(UserForm, { localVue })

describe('UserForm Component', () => {
	it('Sets the correct default data', () => {
		expect(typeof UserForm.data).toBe('function')
		const defaultData = UserForm.data()
		expect(defaultData.labelUsername).toMatch('Username')
		expect(defaultData.labelPassword).toMatch('Password')
		expect(defaultData.username).toMatch('')
		expect(defaultData.password).toMatch('')
		expect(defaultData.status).toBeNull()
		expect(defaultData.statusText).toMatch('')
		expect(defaultData.error).toMatch('')
	})

	it('Should have a Success Messages on Success Status', async () => {
		wrapper.setData({ status: 201 })
		await wrapper.vm.$nextTick()
		const successMessage = wrapper.get('b-message-stub')
		expect(successMessage.attributes().title).toMatch('Success')
		expect(successMessage.attributes().icon).toMatch('check')
	})

	it('Should have an Error Messages on Error Status', async () => {
		wrapper.setData({ status: 401 })
		await wrapper.vm.$nextTick()
		const errorMessage = wrapper.get('b-message-stub')
		expect(errorMessage.attributes().title).toMatch('Error')
		expect(errorMessage.attributes().icon).toMatch('exclamation')
	})
})
