import { shallowMount, createLocalVue } from '@vue/test-utils'
import store from '@/store'
import Buefy from 'buefy'
import ServiceList from '@/components/ServiceList.vue'

const localVue = createLocalVue()
localVue.use(Buefy)

store.state.user = {
	_id: '',
	username: '',
	type: {},
	token: ''
}

const wrapper = shallowMount(ServiceList, { store, localVue })

describe('ServiceList Component', () => {
	const data = ServiceList.data()
	it('Sets the correct default data', () => {
		expect(typeof ServiceList.data).toBe('function')
		expect(data.services).toEqual(expect.arrayContaining([]))
		expect(data.isBordered).toBeTruthy()
		expect(data.hasMobileCards).toBeFalsy()
	})

	it('Should has an init method', () => {
		expect(wrapper.vm.init).toBeTruthy()
	})

	it('Should has a getServices method', () => {
		expect(wrapper.vm.getServices).toBeTruthy()
	})
})
