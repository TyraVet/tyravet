import { shallowMount, createLocalVue } from '@vue/test-utils';
import store from '@/store';
import VueRouter from 'vue-router';
import Pet from '@/views/Pet.vue';
import PetProfile from '@/components/PetProfile.vue';

const localVue = createLocalVue();

localVue.use(VueRouter);
const routes = [
	{
		path: '/clients/:id',
		component: Pet
	}
];

const router = new VueRouter({
	routes
});

/* Dummy User */
store.state.user = {
	_id: '',
	username: '',
	type: {},
	token: ''
}

const wrapper = shallowMount(Pet, { store, localVue, router });

describe('Pet Component', () => {
	it('Renders a main div container', () => {
		expect(wrapper.get('#pet')).toBeTruthy();
	});

	it('Should have a PetProfile child', () => {
		const petProfile = wrapper.findComponent(PetProfile);
		expect(petProfile.exists()).toBeTruthy();
	});
});
