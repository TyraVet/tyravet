import { shallowMount, createLocalVue } from '@vue/test-utils'
import Panel from '@/views/Panel.vue'
import UsersHeader from '@/components/UsersHeader.vue'
import UsersList from '@/components/UsersList.vue'

const localVue = createLocalVue()
const wrapper = shallowMount(Panel, { localVue })

describe('Panel Component', () => {
	it('Should have a UsersHeader Component', () => {
		const usersHeaderComponent = wrapper.findComponent(UsersHeader)
		expect(usersHeaderComponent.exists()).toBeTruthy()
	})

	it('Should have a UsersList Component', () => {
		const usersListComponent = wrapper.findComponent(UsersList)
		expect(usersListComponent.exists()).toBeTruthy()
	})
})
