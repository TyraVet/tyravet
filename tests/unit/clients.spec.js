import { shallowMount, createLocalVue } from '@vue/test-utils';
import store from '@/store';
import Buefy from 'buefy';
import Clients from '@/views/Clients.vue';
import ClientList from '@/components/ClientList.vue';

/* We import createLocalVue to load Buefy and don't
 * have warnings due to its own components. */

const localVue = createLocalVue();
localVue.use(Buefy);

/* Dummy User */
store.state.user = {
	_id: '',
	username: '',
	type: {},
	token: ''
}

const wrapper = shallowMount(Clients, { store, localVue });

describe('Clients Component', () => {
	it('Sets the correct default data', () => {
		expect(typeof Clients.data).toBe('function');
		const defaultData = Clients.data();
		expect(defaultData.title).toMatch('Clients');
		expect(defaultData.labelButton).toMatch('Add');
	});

	it('Should have a ClientList Component', () => {
		const clientListComponent = wrapper.findComponent(ClientList);
		expect(clientListComponent.exists()).toBeTruthy();
	});
});
