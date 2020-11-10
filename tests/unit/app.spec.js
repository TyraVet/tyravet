import { shallowMount, createLocalVue } from '@vue/test-utils';
import store from '@/store';
import router from '@/router';
import VueCookies from 'vue-cookies';
import Buefy from 'buefy';
import App from '@/App.vue';
import SideBar from '@/components/SideBar.vue';

/* We import createLocalVue to load VueRouter */
const localVue = createLocalVue();
localVue.use(VueCookies);
localVue.use(Buefy);

/* Dummy User */
store.state.user = {
	_id: '',
	username: '',
	type: {},
	token: ''
};

const wrapper = shallowMount(App, { store, router, localVue });

describe('App Component', () => {
	it('Has components', () => {
		expect(typeof App.components).toBe('object');
	});

	it('Renders a main div container', () => {
		expect(wrapper.get('#app')).toBeTruthy();
	});

	it('Renders SideBar Component', () => {
		const sideBarComponent = wrapper.findComponent(SideBar);
		expect(sideBarComponent.exists()).toBeTruthy();
	});

	it('Renders Router View Component', () => {
		expect(wrapper.get('#router')).toBeTruthy();
	});

	it('Should store the User if there are Cookies', () => {
		const user = {
			_id: 'dummyid',
			username: 'andres',
			type: 'dummytype',
			token: 'dummytoken'
		};

		wrapper.vm.$cookies.set('user', user);
		expect(wrapper.vm.$cookies.get('user')).toMatchObject(user);
		wrapper.vm.$cookies.remove('user');
	});
});
