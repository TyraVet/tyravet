import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import router from '@/router'
import Vuex from 'vuex'
import Buefy from 'buefy'
import UserForm from '@/components/UserForm.vue'

/* We import createLocalVue to load Buefy and don't
 * have warnings due to its own components. */

const localVue = createLocalVue()
localVue.use(Buefy)
localVue.use(VueRouter)
localVue.use(Vuex)

const store = new Vuex.Store({
	state: {
		user: null
	},
	mutations: {
		fillUser(state, user){
			state.user = {
				_id: user._id,
				username: user.username,
				token: token
			}
		}
	}
})

const wrapper = shallowMount(UserForm, { store, router, localVue })

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

	it('Should have a Success Messages on SignUp Success Status', async () => {
		wrapper.setData({ status: 201 })
		await wrapper.vm.$nextTick()
		const successMessage = wrapper.get('b-message-stub')
		expect(successMessage.attributes().title).toMatch('Success')
		expect(successMessage.attributes().icon).toMatch('check')
	})

	it('Should have an Error Messages on SignUp Error Status', async () => {
		wrapper.setData({ status: 401 })
		await wrapper.vm.$nextTick()
		const errorMessage = wrapper.get('b-message-stub')
		expect(errorMessage.attributes().title).toMatch('Error')
		expect(errorMessage.attributes().icon).toMatch('exclamation')
	})

	it('Should have a Success Messages on LogIn Success Status', async () => {
		wrapper.setData({ status: 200 })
		await wrapper.vm.$nextTick()
		const successMessage = wrapper.get('b-message-stub')
		expect(successMessage.attributes().title).toMatch('Success')
		expect(successMessage.attributes().icon).toMatch('check')
	})

	it('Should have an Error Messages on LogIn Error Status', async () => {
		wrapper.setData({ status: 404 })
		await wrapper.vm.$nextTick()
		const errorMessage = wrapper.get('b-message-stub')
		expect(errorMessage.attributes().title).toMatch('Error')
		expect(errorMessage.attributes().icon).toMatch('exclamation')
	})
})
