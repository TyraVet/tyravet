import { shallowMount, createLocalVue } from '@vue/test-utils';
import store from '@/store';
import Home from '@/views/Home.vue';

const localVue = createLocalVue();

/* Dummy User */
store.state.user = {
	_id: '',
	username: '',
	type: {},
	token: ''
}

const wrapper = shallowMount(Home, { store, localVue });

describe('Home Component', () => {
	it('Renders a main div container', () => {
		expect(wrapper.get('.home')).toBeTruthy();
	});
});
