import { shallowMount, createLocalVue } from '@vue/test-utils'
import store from '@/store'
import Buefy from 'buefy'
import UsersList from '@/components/UsersList.vue'
import TableEditDelete from '@/components/TableEditDelete.vue'

/* We import createLocalVue to load Buefy and store */
const localVue = createLocalVue()
localVue.use(Buefy)

/* Dummy User */
store.state.user = {
	_id: '',
	username: '',
	type: {},
	token: ''
}

const wrapper = shallowMount(UsersList, { store, localVue })

describe('UsersList Component', () => {
	it('Set the correct default data', () => {
		expect(typeof UsersList.data).toBe('function')
		const defaultData = UsersList.data()
		expect(defaultData.users).toEqual(expect.arrayContaining([]))
		expect(defaultData.isBordered).toBeTruthy()
		expect(defaultData.hasMobileCards).toBeTruthy()
	})

	it('Should has an init method', () => {
		expect(wrapper.vm.init).toBeTruthy()
	})

	it('Should has a getServices method', () => {
		expect(wrapper.vm.getUsers).toBeTruthy()
	})

	const main = wrapper.get('#users-list')
	it('Should has a main container', () => {
		expect(main.exists()).toBeTruthy()
	})

	const table = main.get('b-table-stub')
	it('Should has a table child', () => {
		expect(table.exists()).toBeTruthy()
	})

	const nameColumn = table.get('#name-column')
	it('Table should has a Name Column', () => {
		expect(nameColumn.exists()).toBeTruthy()
		expect(nameColumn.attributes().searchable).toBeTruthy()
		expect(nameColumn.attributes().field).toMatch('username')
		expect(nameColumn.attributes().label).toMatch('Username')
	})

	const priceColumn = table.get('#type-column')
	it('Table should has a Price Column', () => {
		expect(priceColumn.exists()).toBeTruthy()
		expect(priceColumn.attributes().field).toMatch('type')
		expect(priceColumn.attributes().label).toMatch('Type')
	})

	it('Should has TableEditDelete Components as Childs', () => {
		expect(main.findComponent(TableEditDelete)).toBeTruthy()
	})
})
