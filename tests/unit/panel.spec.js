import { shallowMount, createLocalVue } from '@vue/test-utils';
import Panel from '@/views/Panel.vue';
import UsersHeader from '@/components/UsersHeader.vue';
import UsersList from '@/components/UsersList.vue';
import Configuration from '@/components/Configuration.vue';

const localVue = createLocalVue();
const wrapper = shallowMount(Panel, { localVue });

describe('Panel Component', () => {
	it('Should has a UsersHeader Component', () => {
		const usersHeaderComponent = wrapper.findComponent(UsersHeader);
		expect(usersHeaderComponent.exists()).toBeTruthy();
	});

	it('Should has a UsersList Component', () => {
		const usersListComponent = wrapper.findComponent(UsersList);
		expect(usersListComponent.exists()).toBeTruthy();
	});

	it('Should has a Configuration Form Component', () => {
		const configuration = wrapper.findComponent(Configuration);
		expect(configuration.exists()).toBeTruthy();
	});
});
